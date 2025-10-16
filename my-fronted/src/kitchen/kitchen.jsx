import React from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import "./Kitchen.css";

const Kitchen = () => {
  return (
    <div className="kitchen">
      {/* Background Image */}
      <div className="background"></div>

      {/* Gradient Overlay */}
      <div className="overlay">
        {/* Navbar */}
        <div className="navbar">
          <nav>
            <Link to="/" className="nav-link">Home</Link>  {/* Link to Home */}
            <Link to="/about" className="nav-link">About</Link>  {/* Link to About */}
            <Link to="/kitchen" className="nav-link active">Kitchen</Link>  {/* Link to Kitchen */}
            <Link to="/rooms" className="nav-link">Rooms</Link>  {/* Link to Rooms */}
            <Link to="/contact" className="nav-link">Contact</Link>  {/* Link to Contact */}
          </nav>
        </div>

        {/* Main Content */}
        <div className="content">
          <h1>Explore Our Exquisite Dining</h1>
          <p>A taste of luxury with every bite</p>

          {/* Menu Button (Wrapped in Link to navigate to List08ProductList.jsx) */}
          <Link to="/list08productlist">
            <button className="btn">
              View Menu <span className="arrow">→</span>
            </button>
          </Link>
        </div>
      </div>

      {/* Featured Dishes Section */}
      <div className="featured-dishes">
        <h2>Featured Dishes</h2>
        <p>Discover our chef's carefully curated selection</p>
        <div className="dish-list">
          <div className="dish">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsfyRDrUvx1CLzlY7saVUJB4fXbqcuYRTZ9g&s" 
              alt="Truffle Risotto" 
            />
            <h3>Truffle Risotto</h3>
            <p>Arborio rice, wild mushrooms, black truffle</p>
            <div className="dish-footer">
              <span className="price">$45</span>
            </div>
          </div>

          <div className="dish">
            <img 
              src="https://www.inspiredtaste.net/wp-content/uploads/2018/08/Pan-Seared-Scallops-Recipe-1200.jpg" 
              alt="Seared Scallops" 
            />
            <h3>Seared Scallops</h3>
            <p>Fresh scallops, cauliflower purée, caviar</p>
            <div className="dish-footer">
              <span className="price">$55</span>
            </div>
          </div>

          <div className="dish">
            <img 
              src="https://www.thespruceeats.com/thmb/8-OfYHy55DoNsLWuX8bjcEXe_zw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-178486348-7e92cc380cf948eb97ffe4a3be4f80dd.jpg" 
              alt="Chocolate Soufflé" 
            />
            <h3>Chocolate Soufflé</h3>
            <p>Dark chocolate, vanilla bean ice cream</p>
            <div className="dish-footer">
              <span className="price">$25</span>
          
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kitchen;
