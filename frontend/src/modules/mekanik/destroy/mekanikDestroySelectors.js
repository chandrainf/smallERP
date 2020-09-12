import { createSelector } from 'reselect';

const selectRaw = (state) => state.mekanik.destroy;

const selectLoading = createSelector(
  [selectRaw],
  (raw) => !!raw.loading,
);

export default {
  selectLoading,
};
