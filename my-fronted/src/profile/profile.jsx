import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./profile.css";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
      fetch(`http://localhost:5000/profile/${storedUser.userId}`)
        .then(res => res.json())
        .then(data => setBookings(data.bookings || []))
        .catch(err => console.error("Error fetching bookings:", err));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    alert("✅ Logged out successfully!");
    navigate("/");
  };

  if (!user) return <p className="loading">Loading profile...</p>;

  return (
    <div className="profile-page">
      <button className="home-btn" onClick={() => navigate("/")}>🏠 Home</button>
      <button className="logout-btn" onClick={handleLogout}>Logout</button>

      <div className="profile-header">
        <h1>Welcome, {user.name} 👋</h1>
        <p>Here’s a summary of your bookings and details</p>
      </div>

      <div className="profile-details">
        <h2>Your Info</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>

      <div className="profile-bookings">
        <h2>Your Bookings</h2>
        {bookings.length === 0 ? (
          <p>No bookings found</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Room</th>
                <th>Check-In</th>
                <th>Check-Out</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map(booking => (
                <tr key={booking.id}>
                  <td>{booking.room_type}</td>
                  <td>{booking.check_in}</td>
                  <td>{booking.check_out}</td>
                  <td>{booking.city}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Profile;
