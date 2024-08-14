// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../components/HomePage/HomePage';
import RegisterPage from '../components/RegisterPage/RegisterPage'; // Import RegisterPage component
import AuthorizationPage from '../components/AuthorizationPage/AuthorizationPage';
import TransactionHistoryPage from '../components/TransactionHistoryPage/TransactionHistoryPage';
import MainTransactionPage from '../components/MainTransactionPage/MainTransactionPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" exact component={HomePage} />
      <Route path="/register" component={RegisterPage} /> {/* Add route for RegisterPage */}
      <Route path="/authorization" component={AuthorizationPage} />
      <Route path="/transaction-history" component={TransactionHistoryPage} />
      <Route path="/main-transaction" component={MainTransactionPage} />
    </Routes>
  </Router>
);

export default App;
