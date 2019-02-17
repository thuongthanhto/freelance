import Axios from 'axios';

export function forgotApi(params) {
  return Axios.request({
    method: 'post',
    url:
      'https://candidate-management-platform.herokuapp.com/rest-auth/password/reset/',
    data: params
  });
}
