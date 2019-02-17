import { createSelector } from 'reselect';

const forgotSelector = state => state.forgot;

export const getForgotError = createSelector(
  forgotSelector,
  state => state.errors
);

export const getForgotSuccess = createSelector(
  forgotSelector,
  state => state.data
);

export const getEmailForgot = createSelector(
  forgotSelector,
  state => state.email
);
