import Axios from 'axios';

export function signupApi(authParams) {
  return Axios.request({
    method: 'post',
    url:
      'https://candidate-management-platform.herokuapp.com/rest-auth/registration/',
    data: authParams
  });
}

export function signupFacebookApi(authParams) {
  return Axios.request({
    method: 'post',
    url:
      'https://candidate-management-platform.herokuapp.com/rest-auth/facebook/',
    data: authParams
  });
}

export function signupLinkedinApi(authParams) {
  return Axios.request({
    method: 'post',
    url:
      'https://candidate-management-platform.herokuapp.com/rest-auth/linkedin/',
    data: authParams
  });
}

export function signupResendApi(email) {
  return Axios.request({
    method: 'post',
    url:
      'https://candidate-management-platform.herokuapp.com/resend-confirmation/',
    data: email
  });
}
