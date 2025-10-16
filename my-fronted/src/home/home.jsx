import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("user");

  const handleProfileClick = () => {
    if (isLoggedIn) navigate("/profile");
    else navigate("/login");
  };

  return (
    <div className="home">
      <div className="background"></div>
      <div className="overlay">
        {/* Navbar with user icon */}
        <div className="navbar">
          <nav>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/kitchen" className="nav-link">Kitchen</Link>
            <Link to="/rooms" className="nav-link">Rooms</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </nav>
          <div className="profile-icon" onClick={handleProfileClick}>
            👤
          </div>
        </div>

        <div className="content">
          <h1>Enjoy Your Stay</h1>
          <p>We give you a legendary welcome when you come back</p>
          <Link to="/about">
            <button className="btn">
              Read More <span className="arrow">→</span>
            </button>
          </Link>
        </div>
      </div>

      <div className="map-container">
        <h2>📍 Find Us Here</h2>
        <p>Plot no. 244, near Gandharva Mahavidyalaya, Bajaj Nagar, Nagpur, Maharashtra 440010</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.8812906480056!2d79.06107367501648!3d21.12258608054538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0d5752f79d5%3A0xeefb1b45d2322a1!2sGandharva%20Mahavidyalaya%20Nagpur!5e0!3m2!1sen!2sin!4v1712131984256!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Home;
