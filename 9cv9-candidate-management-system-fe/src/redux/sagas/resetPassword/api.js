import Axios from 'axios';

export function resetPasswordApi(params) {
  return Axios.request({
    method: 'post',
    url:
      'https://candidate-management-platform.herokuapp.com/rest-auth/password/reset/confirm/',
    data: params
  });
}
