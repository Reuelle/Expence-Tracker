// src/components/TransactionHistoryPage/TransactionHistoryPage.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransactions } from 'redux/transactions/transaction-operations'; // Adjust path as needed
import './TransactionHistoryPage.css'; // Optional: For custom styling

const TransactionHistoryPage = () => {
  const dispatch = useDispatch();
  const transactions = useSelector((state) => state.transactions.items); // Adjust state path as needed

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  return (
    <div className="history-container">
      <h2>Transaction History</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.date} - {transaction.description} - ${transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionHistoryPage;

