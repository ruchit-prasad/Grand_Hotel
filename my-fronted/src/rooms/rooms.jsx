import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import "./Rooms.css";

const Rooms = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="rooms">
      {/* Background Image */}
      <div className="background"></div>

      {/* Gradient Overlay */}
      <div className="overlay">
        {/* Navbar */}
        <div className="navbar">
          <nav>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/kitchen" className="nav-link">Kitchen</Link>
            <Link to="/rooms" className="nav-link active">Rooms</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </nav>
        </div>

        {/* Main Content */}
        <div className="content">
          <h1>Luxury Rooms for a Comfortable Stay</h1>
          <p>Experience unparalleled comfort and elegance</p>
        </div>
      </div>

      {/* Our Room Types */}
      <div className="room-types">
        <h2>Our Room Types</h2>
        <div className="room-list">
          <div className="room">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMh-y0cT-KrqztG_Yuc4Xj1d7z1qL7V0kHoA&s"
              alt="Deluxe Room"
            />
            <h3>Deluxe Room</h3>
            <p>Spacious and elegant with modern amenities</p>
            <span className="price">₹1299/night</span>
          </div>

          <div className="room">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9tcwgBY3SqUEO5OTvUa9wb_cFij7UJBKkgA&s"
              alt="Executive Suite"
            />
            <h3>Executive Suite</h3>
            <p>Luxurious suite with panoramic views</p>
            <span className="price">₹1499/night</span>
          </div>
        </div>
      </div>

      {/* Room Features */}
      <div className="room-features">
        <h2>Room Features</h2>
        <div className="features">
          <div className="feature">
            <div className="icon">🛏️</div>
            <h4>King-Size Bed</h4>
          </div>
          <div className="feature">
            <div className="icon">📶</div>
            <h4>Free Wi-Fi</h4>
          </div>
          <div className="feature">
            <div className="icon">🏊</div>
            <h4>Pool Access</h4>
          </div>
          <div className="feature">
            <div className="icon">🍽️</div>
            <h4>Breakfast</h4>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="cta">
        <h2>Ready to experience luxury?</h2>
        <button className="btn" onClick={() => navigate("/bookkk")}>
          Book Your Stay Now
        </button>
      </div>
    </div>
  );
};

export default Rooms;
