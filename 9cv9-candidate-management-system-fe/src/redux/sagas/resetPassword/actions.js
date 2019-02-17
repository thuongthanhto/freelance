export function resetPasswordWatcher(params) {
  return { type: 'RESET_PASSWORD_WATCHER', payload: params };
}

export function setResetPasswordErrors(errors) {
  return { type: 'SET_RESET_PASSWORD_ERROR', payload: errors };
}

export function setResetPasswordSuccess(data) {
  return { type: 'SET_RESET_PASSWORD_SUCCESS', payload: data };
}
