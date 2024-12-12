import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">LMS Platform</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/video">Video Classes</Link></li>
        <li><Link to="/reminders">Reminders</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
