import { takeLatest, call, put } from 'redux-saga/effects';
import { resetPasswordApi } from './api';
import { setResetPasswordErrors, setResetPasswordSuccess } from './actions';
import { toast } from 'react-toastify';

/** saga worker that is responsible for the side effects */
function* resetPasswordEffectSaga(action) {
  try {
    // data is obtained after axios call is resolved
    let { data } = yield call(resetPasswordApi, action.payload);

    // dispatch action to change redux state
    yield put(setResetPasswordSuccess(data));
    const stringSuccess = data.detail;
    toast.success(stringSuccess.substring(0, stringSuccess.length - 1), {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true
    });
  } catch (error) {
    yield put(setResetPasswordErrors(error.response.data));

    if (error.response.data.token) {
      const stringError = error.response.data.token;
      toast.error(stringError[0], {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true
      });
    }

    if (error.response.data.uid) {
      const stringError = error.response.data.uid;
      toast.error(stringError[0], {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true
      });
    }
  }
}
/**
 * saga watcher that is triggered when dispatching action of type
 */
export function* resetPasswordWatcherSaga() {
  yield takeLatest('RESET_PASSWORD_WATCHER', resetPasswordEffectSaga);
}
