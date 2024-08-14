// src/components/AuthForm/AuthForm.jsx
import React from 'react';
import styles from './AuthForm.module.css'; // Optional: For custom styling

const AuthForm = ({ formType }) => {
  return (
    <form className={styles.authForm}>
      <h2>{formType === 'register' ? 'Sign Up' : 'Sign In'}</h2>
      {/* Add your form fields and submit button here */}
      <div className={styles.formGroup}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
      </div>
      <button type="submit">{formType === 'register' ? 'Register' : 'Login'}</button>
    </form>
  );
};

export default AuthForm;

