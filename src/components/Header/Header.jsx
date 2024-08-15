// src/components/Header/Header.jsx
import React from 'react';
import Logo from '../Logo/logo.png';
import './Header.module.css'; // Import custom styles

const Header = () => (
  <header className="header">
    <Logo /> {/* Use the Logo component */}
    <div className="logo">
      
    </div>
    <nav className="nav">
      {/* Add navigation links or other elements as needed */}
    </nav>
  </header>
);

export default Header;
