import { createSelector } from '@reduxjs/toolkit';

export const selectIncome = state => state.income.items;
export const selectSortedIncome = createSelector([selectIncome], income =>
  [...income].sort((a, b) => b.category.localeCompare(a.category))
);
