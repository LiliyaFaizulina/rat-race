import { createSlice } from '@reduxjs/toolkit';
import { handleReducer } from 'helpers';
import {
  getEquities,
  addEquity,
  updateEquity,
  deleteEquity,
} from './equitiesOperations';
import { STATE_NAME } from 'constants';

const equitySlice = createSlice({
  name: STATE_NAME.equities,
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [getEquities.pending]: handleReducer.handlePending,
    [addEquity.pending]: handleReducer.handlePending,
    [updateEquity.pending]: handleReducer.handlePending,
    [deleteEquity.pending]: handleReducer.handlePending,

    [getEquities.rejected]: handleReducer.handleRejected,
    [addEquity.rejected]: handleReducer.handleRejected,
    [updateEquity.rejected]: handleReducer.handleRejected,
    [deleteEquity.rejected]: handleReducer.handleRejected,

    [getEquities.fulfilled]: handleReducer.getItems,
    [addEquity.fulfilled]: handleReducer.addItem,
    [updateEquity.fulfilled]: handleReducer.updateItem,
    [deleteEquity.fulfilled]: handleReducer.deleteItem,
  },
});

export const equityReducer = equitySlice.reducer;
