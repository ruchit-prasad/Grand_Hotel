import React from "react";
import { Link } from "react-router-dom";  // Import Link for routing
import "./about.css";

const About = () => {
  return (
    <div className="about">
      {/* Background Image */}
      <div className="background"></div>

      {/* Gradient Overlay */}
      <div className="overlay">
        {/* Navbar */}
        <div className="navbar">
          <nav>
            <Link to="/" className="nav-link">Home</Link>  {/* Link to Home */}
            <Link to="/about" className="nav-link active">About</Link>  {/* Link to About (active) */}
            <Link to="/kitchen" className="nav-link">Kitchen</Link>  {/* Link to Kitchen */}
            <Link to="/rooms" className="nav-link">Rooms</Link>  {/* Link to Rooms */}
            <Link to="/contact" className="nav-link">Contact</Link>  {/* Link to Contact */}
          </nav>
        </div>

        {/* Main Content */}
        <div className="content">
          <h1>Welcome to Grand Hotel</h1>
          <p>A luxurious escape designed for comfort and unforgettable experiences</p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="story">
        <h2>Our Story</h2>
        <p>
          Founded in 1995, Grand Hotel offers guests a blend of elegance and relaxation in
          the heart of Manhattan. We are committed to making every stay special, offering
          personalized services tailored to your needs.
        </p>
      </div>

      {/* Our Mission and Vision */}
      <div className="mission-vision">
        <div className="box">
          <h3>Our Mission</h3>
          <p>Delivering exceptional hospitality with personalized care that exceeds expectations.</p>
        </div>
        <div className="box">
          <h3>Our Vision</h3>
          <p>To be the top choice for guests seeking comfort, luxury, and memorable experiences.</p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="why-choose">
        <h2>Why Choose Us</h2>
        <div className="features">
          <div className="feature">
            <div className="icon">🏨</div>
            <h4>Luxury Rooms</h4>
            <p>Spacious & elegant</p>
          </div>
          <div className="feature">
            <div className="icon">👨‍💼</div>
            <h4>24/7 Support</h4>
            <p>Always ready</p>
          </div>
          <div className="feature">
            <div className="icon">📍</div>
            <h4>Location</h4>
            <p>Heart of the city</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="cta">
        <h2>Ready to experience luxury?</h2>
        <Link to="/bookkk">
          <button className="btn">Book Your Stay Now</button>
        </Link>
      </div>
    </div>
  );
};

export default About;