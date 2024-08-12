// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import AuthorizationPage from './components/AuthorizationPage/AuthorizationPage';
import TransactionHistoryPage from './components/TransactionHistoryPage/TransactionHistoryPage';
import MainTransactionPage from './components/MainTransactionPage/MainTransactionPage';
import TransactionNav from './components/TransactionNav/TransactionNav';

const App = () => (
  <Router>
    <Header /> {/* Include the Header component */}
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/authorization" component={AuthorizationPage} />
      <Route path="/transaction-history/:type" component={TransactionHistoryPage} />
      <Route path="/main-transaction" component={MainTransactionPage} />
    </Switch>
  </Router>
);

export default App;
