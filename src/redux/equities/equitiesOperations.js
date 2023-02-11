import { apiServices } from 'helpers';
import { STATE_NAME } from 'constants';

export const getEquities = apiServices.getItems(STATE_NAME.equities);

export const addEquity = apiServices.addItem(STATE_NAME.equities);

export const updateEquity = apiServices.updateItem(STATE_NAME.equities);

export const deleteEquity = apiServices.deleteItem(STATE_NAME.equities);
