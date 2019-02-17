import { createSelector } from 'reselect';

const registerSelector = state => state.register;

export const getRegisterError = createSelector(
  registerSelector,
  state => state.errors
);

export const getRegisterSuccess = createSelector(
  registerSelector,
  state => state.data.detail
);

export const getEmailRegister = createSelector(
  registerSelector,
  state => state.email
);

export const getLoadingRegister = createSelector(
  registerSelector,
  state => state.loading
);
