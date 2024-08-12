// src/components/Logo/Logo.js
import React from 'react';
import logo from './Icon.png'; // Import your logo image
import './Logo.css'; // Optional: For custom styling

const Logo = () => (
  <div className="logo-container">
    <img src={logo} alt="Expense Tracker Logo" className="logo" />
  </div>
);

export default Logo;

