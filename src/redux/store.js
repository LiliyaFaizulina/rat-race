import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { STATE_NAME } from 'constants';
import { authReducer } from './auth/authSlice';
import { creditReducer } from './credits/creditsSlice';
import { expenseReducer } from './expenses/expensesSlice';
import { incomeReducer } from './income/incomeSlice';
import { equityReducer } from './equities/equitiesSlice';

export const store = configureStore({
  reducer: {
    [STATE_NAME.auth]: authReducer,
    [STATE_NAME.credits]: creditReducer,
    [STATE_NAME.expenses]: expenseReducer,
    [STATE_NAME.income]: incomeReducer,
    [STATE_NAME.equities]: equityReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
