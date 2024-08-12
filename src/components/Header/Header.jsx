
// src/components/Header/Header.js
import React from 'react';
import Logo from '../Logo/Icon.svg';
import './Header.css'; // Optional: For custom styling

const Header = () => (
  <header className="header">
    <Logo /> {/* Include the Logo component */}
    <nav className="nav">
      {/* Add navigation links or other elements as needed */}
    </nav>
  </header>
);

export default Header;
