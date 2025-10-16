const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables

// Create a connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "",
  database: process.env.DB_NAME || "hotel_booking",
  port: process.env.DB_PORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Promisify for async/await usage
const promisePool = pool.promise();

module.exports = promisePool;
