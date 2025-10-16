import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        localStorage.setItem("user", JSON.stringify(result));
        navigate("/profile");
      } else {
        setErrorMsg(result.error || "Login failed");
      }
    } catch (error) {
      setErrorMsg("Server error");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-left">
          <img
            src="https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/hotelwebsite-y8vnbg/assets/51m7pj9r76bj/download_(1).jpeg"
            alt="Surfing Illustration"
          />
        </div>
        <div className="login-right">
          <h2>Login</h2>
          {errorMsg && <p className="error">{errorMsg}</p>}
          <form onSubmit={handleLogin}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button type="submit">Login</button>
          </form>
          <div className="login-footer">
            <Link to="/signup">Don't have an account? Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
