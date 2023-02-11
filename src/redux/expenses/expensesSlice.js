import { createSlice } from '@reduxjs/toolkit';
import { handleReducer } from 'helpers';
import {
  getExpenses,
  addExpense,
  updateExpense,
  deleteExpense,
} from './expensesOperations';
import { STATE_NAME } from 'constants';

const expenseSlice = createSlice({
  name: STATE_NAME.expenses,
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [getExpenses.pending]: handleReducer.handlePending,
    [addExpense.pending]: handleReducer.handlePending,
    [updateExpense.pending]: handleReducer.handlePending,
    [deleteExpense.pending]: handleReducer.handlePending,

    [getExpenses.rejected]: handleReducer.handleRejected,
    [addExpense.rejected]: handleReducer.handleRejected,
    [updateExpense.rejected]: handleReducer.handleRejected,
    [deleteExpense.rejected]: handleReducer.handleRejected,

    [getExpenses.fulfilled]: handleReducer.getItems,
    [addExpense.fulfilled]: handleReducer.addItem,
    [updateExpense.fulfilled]: handleReducer.updateItem,
    [deleteExpense.fulfilled]: handleReducer.deleteItem,
  },
});

export const expenseReducer = expenseSlice.reducer;
