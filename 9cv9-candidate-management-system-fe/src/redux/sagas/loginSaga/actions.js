export function loginWatcher(params) {
  return { type: 'LOGIN_WATCHER', payload: params };
}

export function setLoginErrors(errors) {
  return { type: 'SET_LOGIN_ERROR', payload: errors };
}

export function setLoginSuccess(data) {
  return { type: 'SET_LOGIN_SUCCESS', payload: data };
}
