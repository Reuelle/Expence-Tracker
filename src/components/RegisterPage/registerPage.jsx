// src/components/RegisterPage/RegisterPage.jsx
import React from 'react';
import AuthForm from '../AuthForm/AuthForm'; // Import AuthForm component
import styles from './RegisterPage.module.css'; // Optional: For custom styling

const RegisterPage = () => {
  return (
    <div className={styles.registerPage}>
      <header className={styles.header}>
        <h1>Register</h1>
      </header>
      <p className={styles.description}>
        Create a new account by filling out the form below. Once registered, you'll have access to all features of Expense Tracker.
      </p>
      <AuthForm formType="register" /> {/* Pass formType as 'register' */}
    </div>
  );
};

export default RegisterPage;
