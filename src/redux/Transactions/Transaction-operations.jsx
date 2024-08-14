import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define API endpoint
const API_URL = 'https://your-api-endpoint/transactions'; // Replace with your actual API endpoint

// Create an async thunk for adding a new transaction
export const addTransaction = createAsyncThunk(
  'transactions/addTransaction',
  async ({ description, amount }, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_URL, {
        description,
        amount,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Create an async thunk for fetching transactions
export const fetchTransactions = createAsyncThunk(
  'transactions/fetchTransactions',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Create an async thunk for deleting a transaction
export const deleteTransaction = createAsyncThunk(
  'transactions/deleteTransaction',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Create an async thunk for updating a transaction
export const updateTransaction = createAsyncThunk(
  'transactions/updateTransaction',
  async ({ id, updates }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, updates);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

