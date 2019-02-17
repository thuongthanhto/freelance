export function verifyEmailWatcher(params) {
  return { type: 'VERIFY_EMAIL_WATCHER', payload: params };
}

export function setVerifyEmailErrors(errors) {
  return { type: 'SET_VERIFY_EMAIL_ERROR', payload: errors };
}

export function setVerifyEmailSuccess(data) {
  return { type: 'SET_VERIFY_EMAIL_SUCCESS', payload: data };
}
