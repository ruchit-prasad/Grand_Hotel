const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mysql = require("mysql2");
const bcrypt = require("bcryptjs");

dotenv.config();

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST"],
  credentials: true
}));

app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "root",
  database: process.env.DB_NAME || "hotel_booking",
});

db.connect(err => {
  if (err) console.error("❌ MySQL Connection Error:", err);
  else console.log("✅ Connected to MySQL");
});

// ✅ Signup
app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
  db.query(sql, [name, email, hashedPassword], (err, result) => {
    if (err) return res.status(500).json({ error: "Email already registered" });
    res.json({ message: "✅ Signup successful", userId: result.insertId });
  });
});

// ✅ Login
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ error: "All fields required" });

  db.query("SELECT * FROM users WHERE email = ?", [email], async (err, results) => {
    if (err) return res.status(500).json({ error: "Server error!" });
    if (results.length === 0) {
      return res.status(404).json({ error: "User not found. Please sign up first." });
    }

    const user = results[0];
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ error: "Incorrect password." });

    res.json({ message: "✅ Login successful", userId: user.id, name: user.name, email: user.email });
  });
});

// ✅ Profile bookings
app.get("/profile/:id", (req, res) => {
  const userId = req.params.id;
  const sql = "SELECT * FROM bookings WHERE user_id = ?";
  db.query(sql, [userId], (err, bookings) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ bookings });
  });
});

// ✅ Save Booking
app.post("/bookings", (req, res) => {
  const { fullName, roomType, checkIn, checkOut, city, userId } = req.body;
  if (!fullName || !roomType || !checkIn || !checkOut || !city) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const sql = "INSERT INTO bookings (full_name, room_type, check_in, check_out, city, user_id) VALUES (?, ?, ?, ?, ?, ?)";
  db.query(sql, [fullName, roomType, checkIn, checkOut, city, userId || null], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "✅ Booking Saved!", bookingId: result.insertId });
  });
});

// ✅ Contact message
app.post("/contact", (req, res) => {
  const { name, email, phone, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required!" });
  }

  const sql = "INSERT INTO contact_messages (name, email, phone, message) VALUES (?, ?, ?, ?)";
  db.query(sql, [name, email, phone, message], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "✅ Contact Message Sent!", messageId: result.insertId });
  });
});

// ✅ Start Server
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
