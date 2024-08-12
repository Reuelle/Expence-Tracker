// src/components/AuthNav/AuthNav.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AuthNav.module.css'; // Optional: For custom styling

const AuthNav = () => (
  <nav className={styles.authNav}>
    <Link to="/login" className={styles.link}>Login</Link>
    <Link to="/register" className={styles.link}>Register</Link>
  </nav>
);

export default AuthNav;
