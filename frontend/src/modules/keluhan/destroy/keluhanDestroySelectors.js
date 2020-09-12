import { createSelector } from 'reselect';

const selectRaw = (state) => state.keluhan.destroy;

const selectLoading = createSelector(
  [selectRaw],
  (raw) => !!raw.loading,
);

export default {
  selectLoading,
};
