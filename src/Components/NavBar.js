// src/Components/NavBar.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/HomePage">Home</Link></li>
        <li><Link to="/location">Location</Link></li>
        <li><Link to="/review">Review</Link></li>
        <li><Link to="/help">Help</Link></li>
        <li><Link to="/scheme">Scheme</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
