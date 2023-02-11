import { createSlice } from '@reduxjs/toolkit';
import { handleReducer } from 'helpers';
import {
  getCredits,
  addCredit,
  updateCredit,
  deleteCredit,
} from './creditsOperations';
import { STATE_NAME } from 'constants';

const creditSlice = createSlice({
  name: STATE_NAME.credits,
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [getCredits.pending]: handleReducer.handlePending,
    [addCredit.pending]: handleReducer.handlePending,
    [updateCredit.pending]: handleReducer.handlePending,
    [deleteCredit.pending]: handleReducer.handlePending,

    [getCredits.rejected]: handleReducer.handleRejected,
    [addCredit.rejected]: handleReducer.handleRejected,
    [updateCredit.rejected]: handleReducer.handleRejected,
    [deleteCredit.rejected]: handleReducer.handleRejected,

    [getCredits.fulfilled]: handleReducer.getItems,
    [addCredit.fulfilled]: handleReducer.addItem,
    [updateCredit.fulfilled]: handleReducer.updateItem,
    [deleteCredit.fulfilled]: handleReducer.deleteItem,
  },
});

export const creditReducer = creditSlice.reducer;
