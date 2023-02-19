import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  register,
  login,
  logout,
  getCurrentGamer,
  updateGamer,
} from './authOperations';
import { handleReducer } from 'helpers';
import { STATE_NAME } from 'constants';

const initialState = {
  gamer: {
    id: '',
    name: '',
    position: '',
    dream: '',
    dreamCost: 0,
    debt: 0,
    children: 0,
    note: '',
  },
  token: null,
  isLoading: false,
  isAuth: false,
  error: null,
};

const authPersistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const authSlice = createSlice({
  name: STATE_NAME.auth,
  initialState,
  extraReducers: {
    [register.pending]: handleReducer.handlePending,
    [login.pending]: handleReducer.handlePending,
    [logout.pending]: handleReducer.handlePending,
    [getCurrentGamer.pending]: handleReducer.handlePending,
    [updateGamer.pending]: handleReducer.handlePending,

    [register.rejected]: handleReducer.handleRejected,
    [login.rejected]: handleReducer.handleRejected,
    [logout.rejected]: handleReducer.handleRejected,
    [getCurrentGamer.rejected]: handleReducer.handleRejected,
    [updateGamer.rejected]: handleReducer.handleRejected,

    [register.fulfilled]: (state, { payload: { gamer, token } }) => {
      state.gamer = gamer;
      state.token = token;
      state.isAuth = true;
      state.isLoading = false;
    },
    [login.fulfilled]: (state, { payload: { gamer, token } }) => {
      state.gamer = gamer;
      state.token = token;
      state.isAuth = true;
      state.isLoading = false;
    },
    [logout.fulfilled]: state => {
      state.gamer = initialState.gamer;
      state.isAuth = false;
      state.isLoading = false;
    },
    [getCurrentGamer.fulfilled]: (state, { payload: { gamer, token } }) => {
      state.gamer = gamer;
      state.token = token;
      state.isAuth = true;
      state.isLoading = false;
    },
    [updateGamer.fulfilled]: (state, { payload: { gamer } }) => {
      state.gamer = gamer;
      state.isAuth = true;
      state.isLoading = false;
    },
  },
});

export const authReducer = persistReducer(authPersistConfig, authSlice.reducer);
