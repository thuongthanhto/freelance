export function forgotWatcher(params) {
  return { type: 'FORGOT_WATCHER', payload: params };
}

export function setForgotErrors(errors) {
  return { type: 'SET_FORGOT_ERROR', payload: errors };
}

export function setForgotSuccess(data) {
  return { type: 'SET_FORGOT_SUCCESS', payload: data };
}

export function setEmailForgot(email) {
  return { type: 'SET_EMAIL_FORGOT', payload: email };
}
