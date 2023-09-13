import { createSelector } from '@ngrx/store';

export const selectCount = (state: { counter: number }) => state.counter;
export const selectDoublecount = createSelector(
selectCount,
  (state: number) => state * 2
);
