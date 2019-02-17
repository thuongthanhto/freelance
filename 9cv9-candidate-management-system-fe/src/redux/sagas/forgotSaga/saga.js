// import { browserHistory } from 'react-router';
import { takeLatest, call, put } from 'redux-saga/effects';
import { forgotApi } from './api';
import { setForgotErrors, setForgotSuccess } from './actions';
import { toast } from 'react-toastify';

/** saga worker that is responsible for the side effects */
function* forgotEffectSaga(action) {
  try {
    // data is obtained after axios call is resolved
    let { data } = yield call(forgotApi, action.payload);

    // dispatch action to change redux state
    yield put(setForgotSuccess(data));
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
    yield put(setForgotErrors(error.response.data));
  }
}
/**
 * saga watcher that is triggered when dispatching action of type
 */
export function* forgotWatcherSaga() {
  yield takeLatest('FORGOT_WATCHER', forgotEffectSaga);
}
