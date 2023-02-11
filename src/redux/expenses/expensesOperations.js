import { apiServices } from 'helpers';
import { STATE_NAME } from 'constants';

export const getExpenses = apiServices.getItems(STATE_NAME.expenses);

export const addExpense = apiServices.addItem(STATE_NAME.expenses);

export const updateExpense = apiServices.updateItem(STATE_NAME.expenses);

export const deleteExpense = apiServices.deleteItem(STATE_NAME.expenses);
