// src/components/HomePage/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Optional: For custom styling

const HomePage = () => (
  <div className="home-container">
    <h1 className="home-title">Welcome to Expense Tracker</h1>
    <nav>
      <ul>
        <li><Link to="/authorization">Authorization</Link></li>
        <li><Link to="/transaction-history">Transaction History</Link></li>
        <li><Link to="/main-transaction">Main Transaction</Link></li>
      </ul>
    </nav>
  </div>
);

export default HomePage;

