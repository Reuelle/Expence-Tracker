// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage'; // Correct import path
import RegisterPage from './components/RegisterPage/RegisterPage'; // Correct import path
import AuthorizationPage from './components/AuthorizationPage/AuthorizationPage';
import TransactionHistoryPage from './components/TransactionHistoryPage/TransactionHistoryPage';
import MainTransactionPage from './components/MainTransactionPage/MainTransactionPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/authorization" element={<AuthorizationPage />} />
      <Route path="/transaction-history" element={<TransactionHistoryPage />} />
      <Route path="/main-transaction" element={<MainTransactionPage />} />
    </Routes>
  </Router>
);

export default App;
