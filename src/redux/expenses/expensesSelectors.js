import { createSelector } from '@reduxjs/toolkit';

export const selectExpenses = state => state.expenses.items;

export const selectSortedExpenses = createSelector([selectExpenses], expenses =>
  [...expenses].sort((a, b) => b.category.localeCompare(a.category))
);
