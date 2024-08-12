// src/components/HomePage/HomePage.jsx
import React from 'react';
import AuthNav from '../AuthNav/AuthNav';
import AllUsersTab from '../AllUsersTab/AllUsersTab'; // Import AllUsersTab component
import styles from './HomePage.module.css'; // Optional: For custom styling

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <header className={styles.header}>
        <h1>Welcome to Expense Tracker</h1>
        <p>Your personal finance management app</p>
      </header>
      <AuthNav />
      <div className={styles.content}>
        <AllUsersTab /> {/* This will only be visible on desktop */}
      </div>
    </div>
  );
};

export default HomePage;
