// import { browserHistory } from 'react-router';
import { takeLatest, call, put } from 'redux-saga/effects';
import { loginApi } from './api';
import { setLoginErrors, setLoginSuccess } from './actions';
import { toast } from 'react-toastify';
import { push } from 'connected-react-router';

/** saga worker that is responsible for the side effects */
function* loginEffectSaga(action) {
  try {
    yield put({ type: 'ENABLE_LOADING' });
    // data is obtained after axios call is resolved
    let { data } = yield call(loginApi, action.payload);

    // dispatch action to change redux state
    yield put(setLoginSuccess(data));
    toast.success('Login success', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true
    });

    localStorage.setItem('token', data.token);

    yield put(push('/first-login'));
  } catch (error) {
    const stringError = error.response.data.non_field_errors[0];
    yield put(setLoginErrors(error.response.data));

    if (stringError === 'Incorrect value') {
      toast.error('Incorrect value', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true
      });
    }

    toast.error(stringError.substring(0, stringError.length - 1), {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true
    });
    // catch error on a bad axios call
    // alert using an alert library
  }
}
/**
 * saga watcher that is triggered when dispatching action of type
 */
export function* loginWatcherSaga() {
  yield takeLatest('LOGIN_WATCHER', loginEffectSaga);
}
