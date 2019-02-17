import { createSelector } from 'reselect';

const loginSelector = state => state.login;

export const getLoginError = createSelector(
  loginSelector,
  state => state.errors
);

export const getLoginSuccess = createSelector(
  loginSelector,
  state => state.data
);

export const getLoadingLogin = createSelector(
  loginSelector,
  state => state.loading
);
