import { createSelector } from 'reselect';

const selectRaw = (state) => state.satuan.destroy;

const selectLoading = createSelector(
  [selectRaw],
  (raw) => !!raw.loading,
);

export default {
  selectLoading,
};
