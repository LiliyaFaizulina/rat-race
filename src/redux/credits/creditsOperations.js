import { apiServices } from 'helpers';
import { STATE_NAME } from 'constants';

export const getCredits = apiServices.getItems(STATE_NAME.credits);

export const addCredit = apiServices.addItem(STATE_NAME.credits);

export const updateCredit = apiServices.updateItem(STATE_NAME.credits);

export const deleteCredit = apiServices.deleteItem(STATE_NAME.credits);
