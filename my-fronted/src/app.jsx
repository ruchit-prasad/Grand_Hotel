import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home/home";  // Import Home component
import About from "./about/about";  // Example About component
import Kitchen from "./kitchen/kitchen";  // Example Kitchen component
import Rooms from "./rooms/rooms";  // Example Rooms component
import Contact from "./contact/contact";  // Example Contact component
import List08ProductList from './menu/List08ProductList';
import Bookkk from "./bookkk/bookkk";
import Payment from "./payment/payment";
import Login from "./login/login";
import Signup from "./signup/signup";
import Profile from "./profile/profile";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/kitchen" element={<Kitchen />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/list08ProductList" element={<List08ProductList />} />
        <Route path="/bookkk" element={<Bookkk/>} />  
        <Route path="/payment" element={<Payment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
