export function signupWatcher(authParams) {
  return { type: 'SIGNUP_WATCHER', payload: authParams };
}

export function signupFacebookWatcher(authParams) {
  return { type: 'SIGNUP_FACEBOOK_WATCHER', payload: authParams };
}

export function signupLinkedinWatcher(authParams) {
  return { type: 'SIGNUP_LINKEDIN_WATCHER', payload: authParams };
}

export function signupResendWatcher(email) {
  return { type: 'SIGNUP_RESEND_WATCHER', payload: email };
}

export function setSignupErrors(errors) {
  return { type: 'SET_SIGNUP_ERROR', payload: errors };
}

export function setSignupSuccess(data) {
  return { type: 'SET_SIGNUP_SUCCESS', payload: data };
}

export function resetFormSignup() {
  return { type: 'RESET_FORM_SIGNUP' };
}

export function setEmailRegister(email) {
  return { type: 'SET_EMAIL_REGISTER', payload: email };
}
