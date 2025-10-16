import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./bookkk.css";

const Booking = () => {
  const navigate = useNavigate();

  const [roomType, setRoomType] = useState("");
  const [numAdults, setNumAdults] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [airportTransfer, setAirportTransfer] = useState(false);
  const [extraBed, setExtraBed] = useState(false);
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in by verifying user data in localStorage
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      setIsLoggedIn(false);
      navigate("/login"); // Redirect to login page if not logged in
    } else {
      setIsLoggedIn(true);
    }
  }, [navigate]);

  const handleConfirmBooking = async () => {
    if (!isLoggedIn) {
      alert("❌ You must be logged in to make a booking.");
      return;
    }

    if (!fullName || !roomType || !checkIn || !checkOut || !city) {
      alert("❌ Please fill in all required fields.");
      return;
    }

    const today = new Date().toISOString().split("T")[0];

    if (checkIn < today || checkOut < today) {
      alert("❌ Check-in and Check-out dates cannot be in the past.");
      return;
    }

    if (checkOut <= checkIn) {
      alert("❌ Check-out date must be after Check-in date.");
      return;
    }

    if (aadhar.length !== 12 || !/^\d{12}$/.test(aadhar)) {
      alert("❌ Aadhar number must be exactly 12 digits.");
      return;
    }

    if (age < 18) {
      alert("❌ Age must be 18 years or above.");
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem("user"));
    const bookingData = {
      fullName,
      roomType,
      checkIn,
      checkOut,
      city,
      userId: storedUser?.userId || null,
    };

    try {
      const response = await fetch("http://localhost:5000/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });

      const result = await response.json();

      if (response.ok) {
        alert("✅ Your booking is registered. Booking ID: " + result.bookingId);
        navigate("/payment");
      } else {
        console.error("❌ Booking failed:", result.error);
        alert("❌ Booking failed: " + (result.error || "Unknown error"));
      }
    } catch (error) {
      console.error("❌ Error submitting booking:", error);
      alert("❌ Something went wrong! Please try again.");
    }
  };

  return (
    <div className="booking">
      <div className="background"></div>

      <div className="overlay">
        <div className="header">
          <h1>Book Your Stay with Us</h1>
          <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
        </div>

        <div className="booking-form">
          <h2>Room Selection</h2>
          <div className="form-group">
            <label>Room Type:</label>
            <select value={roomType} onChange={(e) => setRoomType(e.target.value)}>
              <option value="">Select...</option>
              <option value="Deluxe Room">Deluxe Room</option>
              <option value="Exclusive Suite">Exclusive Suite</option>
            </select>
          </div>

          <div className="form-group">
            <label>Number of Adults:</label>
            <select value={numAdults} onChange={(e) => setNumAdults(e.target.value)}>
              <option value="">Select...</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>

          <h2>Select Dates</h2>
          <div className="form-group">
            <label>Check-in Date:</label>
            <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
          </div>

          <div className="form-group">
            <label>Check-out Date:</label>
            <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
          </div>

          <h2>Additional Services</h2>
          <div className="form-group checkbox-group">
            <label>
              <input type="checkbox" checked={airportTransfer} onChange={() => setAirportTransfer(!airportTransfer)} />
              Airport Transfer Service
            </label>
          </div>

          <div className="form-group checkbox-group">
            <label>
              <input type="checkbox" checked={extraBed} onChange={() => setExtraBed(!extraBed)} />
              Extra Bed
            </label>
          </div>

          <h2>Guest Details</h2>
          <div className="form-group">
            <label>Full Name:</label>
            <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
          </div>

          <div className="form-group">
            <label>Age:</label>
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
          </div>

          <div className="form-group">
            <label>City:</label>
            <select value={city} onChange={(e) => setCity(e.target.value)}>
              <option value="">Select...</option>
              <option value="Nagpur">Nagpur</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Pune">Pune</option>
            </select>
          </div>

          <div className="form-group">
            <label>Aadhar Number:</label>
            <input type="text" value={aadhar} onChange={(e) => setAadhar(e.target.value)} />
          </div>

          <button className="btn" onClick={handleConfirmBooking}>Confirm Booking</button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
