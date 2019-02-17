import { createSelector } from 'reselect';

const verfifySelector = state => state.register;

export const getVerifyEmailError = createSelector(
  verfifySelector,
  state => state.errors
);

export const getVerifyEmailSuccess = createSelector(
  verfifySelector,
  state => state.data
);
