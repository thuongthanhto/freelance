import Axios from 'axios';

export function verifyEmailApi(params) {
  return Axios.request({
    method: 'post',
    url:
      'https://candidate-management-platform.herokuapp.com/rest-auth/registration/verify-email/',
    data: params
  });
}
