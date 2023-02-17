import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { STATE_NAME } from 'constants';
import { toast } from 'react-toastify';

const { REACT_APP_API_URL } = process.env;

export const instance = axios.create({
  baseURL: REACT_APP_API_URL,
});

const token = {
  set(token) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },
  unset() {
    instance.defaults.headers.common['Authorization'] = '';
  },
};

export const register = createAsyncThunk(
  `${STATE_NAME.auth}/register`,
  async (gamerData, { rejectWithValue }) => {
    try {
      const { data } = await instance.post(
        `/${STATE_NAME.auth}/register`,
        gamerData
      );
      token.set(data.token);
      toast.success(`Welcome ${data.gamer.name}!`);
      return data;
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  `${STATE_NAME.auth}/login`,
  async (gamerData, { rejectWithValue }) => {
    try {
      const { data } = await instance.post(
        `/${STATE_NAME.auth}/login`,
        gamerData
      );
      token.set(data.token);
      toast.success(`Welcome ${data.gamer.name}!`);
      return data;
    } catch (error) {
      toast.error(error.response.data.message);
      return rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  `${STATE_NAME.auth}/logout`,
  async (_, { rejectWithValue }) => {
    try {
      await instance.get(`/${STATE_NAME.auth}/logout`);
      token.unset();
      toast.success('Logout was successful');
    } catch (error) {
      toast.error(error.response.data.message);
      return rejectWithValue(error.message);
    }
  }
);

export const getCurrentGamer = createAsyncThunk(
  `${STATE_NAME.auth}/getCurrentGamer`,
  async (_, { rejectWithValue, getState }) => {
    const tokenCurrent = getState().auth.token;
    if (!tokenCurrent) {
      return rejectWithValue();
    }
    token.set(tokenCurrent);
    try {
      const { data } = await instance.get(`/${STATE_NAME.auth}/gamer`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateGamer = createAsyncThunk(
  `${STATE_NAME.auth}/updateGamer`,
  async (gamerData, { rejectWithValue }) => {
    try {
      const { data } = await instance.put(
        `/${STATE_NAME.auth}/gamer`,
        gamerData
      );
      toast.success('Update successful!');
      return data;
    } catch (error) {
      toast.error(error.response.data.message);
      return rejectWithValue(error.message);
    }
  }
);
