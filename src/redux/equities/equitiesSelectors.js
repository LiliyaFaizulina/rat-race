import { createSelector } from '@reduxjs/toolkit';

export const selectEquities = state => state.equities.items;

export const selectSortedEquities = createSelector([selectEquities], equities =>
  [...equities].sort((a, b) => a.code.localeCompare(b.code))
);
