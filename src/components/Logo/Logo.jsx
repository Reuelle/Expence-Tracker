// src/components/Logo/Logo.jsx
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth'; // Assumed custom hook for authentication status
import logoImage from './Icon.png'; // Path to the logo image
import styles from './Logo.module.css'; // CSS Module for styling

const Logo = () => {
  const history = useHistory();
  const { isAuthenticated } = useAuth(); // Use authentication hook to check if user is authenticated

  const handleClick = () => {
    if (isAuthenticated) {
      history.push('/main-transaction'); // Redirect to MainTransactionPage for authenticated users
    } else {
      history.push('/'); // Redirect to HomePage for unauthenticated users
    }
  };

  return (
    <div className={styles.logoContainer} onClick={handleClick}>
      <img src={logoImage} alt="Expense Tracker Logo" className={styles.logo} />
        <span className="logo-text">EXPENSE TRACKER</span>
    </div>
  );
};

export default Logo;
