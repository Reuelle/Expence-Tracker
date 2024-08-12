// src/components/Header/Header.js
import React from 'react';
import Logo from '../Logo/Logo';
import './Header.css'; // Optional: For custom styling

const Header = () => (
  <header className="header">
    <Logo /> {"EXPENSE TRACKER"}
    <nav className="nav">
      {/* Add navigation links or other elements as needed */}
    </nav>
  </header>
);

export default Header;
