import { createSlice } from '@reduxjs/toolkit';
import { handleReducer } from 'helpers';
import {
  getIncome,
  addIncome,
  updateIncome,
  deleteIncome,
} from './incomeOperations';
import { STATE_NAME } from 'constants';

const incomeSlice = createSlice({
  name: STATE_NAME.income,
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [getIncome.pending]: handleReducer.handlePending,
    [addIncome.pending]: handleReducer.handlePending,
    [updateIncome.pending]: handleReducer.handlePending,
    [deleteIncome.pending]: handleReducer.handlePending,

    [getIncome.rejected]: handleReducer.handleRejected,
    [addIncome.rejected]: handleReducer.handleRejected,
    [updateIncome.rejected]: handleReducer.handleRejected,
    [deleteIncome.rejected]: handleReducer.handleRejected,

    [getIncome.fulfilled]: handleReducer.getItems,
    [addIncome.fulfilled]: handleReducer.addItem,
    [updateIncome.fulfilled]: handleReducer.updateItem,
    [deleteIncome.fulfilled]: handleReducer.deleteItem,
  },
});

export const incomeReducer = incomeSlice.reducer;
