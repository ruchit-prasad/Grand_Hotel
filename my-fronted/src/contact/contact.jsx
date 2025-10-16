import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [responseMsg, setResponseMsg] = useState("");

  // ✅ Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setResponseMsg("✅ Message sent successfully!");
        alert("✅ Your message has been sent successfully!"); // Pop-up alert
        setFormData({ name: "", email: "", phone: "", message: "" }); // Reset form
      } else {
        setResponseMsg(`❌ ${result.error}`);
        alert(`❌ ${result.error}`);
      }
    } catch (error) {
      setResponseMsg("❌ Something went wrong. Try again!");
      alert("❌ Something went wrong. Try again!");
      console.error("Error:", error);
    }
  };

  return (
    <div className="contact">
      <div className="background"></div>
      <div className="overlay">
        <div className="navbar">
          <nav>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/kitchen" className="nav-link">Kitchen</Link>
            <Link to="/rooms" className="nav-link">Rooms</Link>
            <Link to="/contact" className="nav-link active">Contact</Link>
          </nav>
        </div>

        <div className="content">
          <h1>We're Here to Help!</h1>
          <p>Feel free to contact us anytime for bookings, inquiries, or feedback.</p>
        </div>
      </div>

      <div className="contact-info">
        <div className="info-card"><div className="icon">📍</div><h3>Our Location</h3><p>Bajaj Nagar, Near Radha Krishna Residency</p></div>
        <div className="info-card"><div className="icon">📞</div><h3>Call Us</h3><p>+91 98502 92729</p><span>24/7 Service</span></div>
        <div className="info-card"><div className="icon">✉️</div><h3>Email Us</h3><p>contact@grandhotel.com</p></div>
      </div>

      <div className="contact-form">
        <h2>Send us a Message</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Phone Number (Optional)" value={formData.phone} onChange={handleChange} />
          <textarea name="message" placeholder="Your Message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
          <button type="submit" className="btn">Send Message</button>
        </form>
        {responseMsg && <p className="response-message">{responseMsg}</p>}
      </div>
    </div>
  );
};

export default Contact;