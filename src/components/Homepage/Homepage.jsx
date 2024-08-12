// src/components/HomePage/HomePage.jsx
import React from 'react';
import BalanceBlock from '../BalanceBlock/BalanceBlock';
import styles from './HomePage.module.css';

const HomePage = () => (
  <div className={styles.container}>
    <h1>Welcome to the Expense Tracker</h1>
    <BalanceBlock /> {/* Add the dynamic balance block */}
    {/* Other content */}
  </div>
);

export default HomePage;
