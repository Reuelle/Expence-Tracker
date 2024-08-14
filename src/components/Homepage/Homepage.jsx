// src/components/HomePage/HomePage.jsx
import React from 'react';
import AuthNav from '../AuthNav/AuthNav';
import AllUsersTab from '../AllUsersTab/AllUsersTab'; // Import AllUsersTab component
import styles from './HomePage.module.css'; // Optional: For custom styling

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <header className={styles.header}>
         <h3>EXPENSE LOG</h3>
        <h1>Manage Your Finances Masterfully!</h1>
        <p>ExpenseTracker effortlessly empowers you to take controlof your finaces!with intuitive features,it simplifies the process of tracking and managing expenses,allowing for a stress-free mastery over your financial world. </p>
      </header>
      <AuthNav />
      <div className={styles.content}>
        <AllUsersTab /> {/* This will only be visible on desktop */}
      </div>
    </div>
  );
};

export default HomePage;
