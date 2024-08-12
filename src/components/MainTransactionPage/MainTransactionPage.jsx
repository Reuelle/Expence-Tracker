// src/components/MainTransactionPage/MainTransactionPage.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTransaction } from 'redux/transactions/transaction-operations'; // Adjust path as needed
import './MainTransactionPage.css'; // Optional: For custom styling

const MainTransactionPage = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const dispatch = useDispatch();

  const handleAddTransaction = () => {
    dispatch(addTransaction({ description, amount }));
    setDescription('');
    setAmount('');
  };

  return (
    <div className="transaction-container">
      <h2>Add New Transaction</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <button type="button" onClick={handleAddTransaction}>Add Transaction</button>
      </form>
    </div>
  );
};

export default MainTransactionPage;

