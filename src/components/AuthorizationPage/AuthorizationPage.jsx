// src/components/AuthorizationPage/AuthorizationPage.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/Auth/Auth-operations'; // Adjust path as needed
import './AuthorizationPage.css'; // Optional: For custom styling

const AuthorizationPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(logIn({ email, password }));
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="button" onClick={handleLogin}>Log In</button>
      </form>
    </div>
  );
};

export default AuthorizationPage;

