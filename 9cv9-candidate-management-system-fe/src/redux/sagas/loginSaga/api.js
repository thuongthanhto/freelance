import Axios from 'axios';

export function loginApi(params) {
  return Axios.request({
    method: 'post',
    url: 'https://candidate-management-platform.herokuapp.com/rest-auth/login/',
    data: params
  });
}
