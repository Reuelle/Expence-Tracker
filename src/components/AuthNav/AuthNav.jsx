// src/components/AuthNav/AuthNav.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AuthNav.module.css'; // Optional: For custom styling

const AuthNav = () => {
  return (
      <div className={styles.homePage}>
      <header className={styles.header}>
         <h3>EXPENSE LOG</h3>
        <h1>Manage Your Finances Masterfully!</h1>
        <p>ExpenseTracker effortlessly empowers you to take controlof your finaces!with intuitive features,it simplifies the process of tracking and managing expenses,allowing for a stress-free mastery over your financial world. </p>
    <nav className={styles.authNav}>
      <Link to="/register" className={styles.link}>Sign Up</Link>
      <Link to="/login" className={styles.link}>Sign In</Link>
    </nav>
       </div>  
  );
};

export default AuthNav;
