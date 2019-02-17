// import { updateProfile } from './actionCreators';
// import { browserHistory } from 'react-router';
import { takeLatest, call, put } from 'redux-saga/effects';
import { verifyEmailApi } from './api';
import { setVerifyEmailErrors, setVerifyEmailSuccess } from './actions';
import { toast } from 'react-toastify';

/** saga worker that is responsible for the side effects */
function* verifyEmailEffectSaga(action) {
  try {
    // data is obtained after axios call is resolved
    let { data } = yield call(verifyEmailApi, action.payload);

    console.log(data);
    toast.success(
      'Your account is verified. Please login with your email and password',
      {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true
      }
    );
    // dispatch action to change redux state
    yield put(setVerifyEmailSuccess(data));
  } catch (error) {
    // catch error on a bad axios call
    // alert using an alert library
    console.log(error.response.data);
    yield put(setVerifyEmailErrors(error.response.data));
  }
}
/**
 * saga watcher that is triggered when dispatching action of type
 */
export function* verifyEmailWatcherSaga() {
  yield takeLatest('VERIFY_EMAIL_WATCHER', verifyEmailEffectSaga);
}
