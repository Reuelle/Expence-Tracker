import React from 'react';
import Logo from '../Logo/Logo';
import './Header.module.css'; // Import custom styles

const Header = () => (
  <header className="header">
    <div className="logo">
      EXPENSETRACKER
    </div>
    <nav className="nav">
      {/* Add navigation links or other elements as needed */}
    </nav>
  </header>
);

export default Header;
