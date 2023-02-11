import { apiServices } from 'helpers';
import { STATE_NAME } from 'constants';

export const getIncome = apiServices.getItems(STATE_NAME.income);

export const addIncome = apiServices.addItem(STATE_NAME.income);

export const updateIncome = apiServices.updateItem(STATE_NAME.income);

export const deleteIncome = apiServices.deleteItem(STATE_NAME.income);
