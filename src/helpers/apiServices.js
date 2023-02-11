import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from 'redux/auth/authOperations';

const getItems = stateName => {
  return createAsyncThunk(
    `${stateName}/get${stateName}`,
    async (_, { rejectWithValue }) => {
      try {
        const { data } = await instance.get(`/${stateName}`);
        return data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
};

const addItem = stateName => {
  return createAsyncThunk(
    `${stateName}/add${stateName}`,
    async (credit, { rejectWithValue }) => {
      try {
        const { data } = await instance.post(`/${stateName}`, credit);
        return data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
};

const updateItem = stateName => {
  return createAsyncThunk(
    `${stateName}/update${stateName}`,
    async ({ body, id }, { rejectWithValue }) => {
      try {
        const { data } = await instance.put(`/${stateName}/${id}`, body);
        return data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
};

const deleteItem = stateName => {
  return createAsyncThunk(
    `${stateName}/delete${stateName}`,
    async (id, { rejectWithValue }) => {
      try {
        await instance.delete(`/${stateName}/${id}`);
        return id;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
};

export const apiServices = {
  getItems,
  addItem,
  updateItem,
  deleteItem,
};
