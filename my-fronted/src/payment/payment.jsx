import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./payment.css";

const Payment = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState(1000); // Default 1000
  const [paymentMethod, setPaymentMethod] = useState("card");

  const handlePayment = (e) => {
    e.preventDefault();

    if (amount < 1000) {
      alert("❌ Minimum payment amount should be ₹1000.");
      return;
    }

    if (!name || !email) {
      alert("❌ Please fill in your name and email.");
      return;
    }

    alert(`✅ Payment of ₹${amount} successful via ${paymentMethod}`);
    navigate("/");
  };

  return (
    <div className="payment">
      <div className="background"></div>
      <div className="overlay">
        <div className="header">
          <h1>Payment</h1>
          <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
        </div>

        <form className="payment-form" onSubmit={handlePayment}>
          <div className="form-group">
            <label>Full Name:</label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Email Address:</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Amount (₹):</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              min={1000}
              required
            />
          </div>

          <div className="form-group">
            <label>Payment Method:</label>
            <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
              <option value="card">Credit/Debit Card</option>
              <option value="upi">UPI</option>
              <option value="netbanking">Net Banking</option>
            </select>
          </div>

          <button type="submit" className="btn">Pay Now</button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
