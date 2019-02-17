import { createSelector } from 'reselect';

const resetPasswordSelector = state => state.resetPassword;

export const getResetPasswordError = createSelector(
  resetPasswordSelector,
  state => state.errors
);

export const getResetPasswordSuccess = createSelector(
  resetPasswordSelector,
  state => state.data
);
