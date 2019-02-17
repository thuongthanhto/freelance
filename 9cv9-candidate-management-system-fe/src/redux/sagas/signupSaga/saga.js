import { takeLatest, call, put } from 'redux-saga/effects';
import {
  signupApi,
  signupFacebookApi,
  signupLinkedinApi,
  signupResendApi
} from './api';
import { setSignupErrors, setSignupSuccess } from './actions';
import { toast } from 'react-toastify';
import { push } from 'connected-react-router';

/** saga worker that is responsible for the side effects */
function* signupEffectSaga(action) {
  try {
    yield put({ type: 'ENABLE_LOADING' });
    // data is obtained after axios call is resolved
    let { data } = yield call(signupApi, action.payload);

    // dispatch action to change redux state
    yield put(setSignupSuccess(data));
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
    yield put(setSignupErrors(error.response.data));
  }
}

function* signupResendEffectSaga(action) {
  try {
    yield put({ type: 'ENABLE_LOADING' });
    let { data } = yield call(signupResendApi, action.payload);
    // dispatch action to change redux state
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
    yield put(setSignupErrors(error.response.data));
  }
}

function* signupFacebookEffectSaga(action) {
  try {
    yield put({ type: 'ENABLE_LOADING' });
    let { data } = yield call(signupFacebookApi, action.payload);
    console.log(data);

    yield put({ type: 'DISABLE_LOADING' });
    yield put(push('/first-login'));
    toast.success('Login success', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true
    });
  } catch (error) {
    yield put({ type: 'DISABLE_LOADING' });
    const stringError = error.response.data.non_field_errors[0];

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
  }
}

function* signupLinkedinEffectSaga(action) {
  try {
    yield put({ type: 'ENABLE_LOADING' });
    // data is obtained after axios call is resolved
    let { data } = yield call(signupLinkedinApi, action.payload);

    yield put({ type: 'DISABLE_LOADING' });
    yield put(push('/first-login'));
    toast.success('Login success', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true
    });
  } catch (error) {
    yield put({ type: 'DISABLE_LOADING' });
    console.log(error);
    const stringError = error.response.data.non_field_errors[0];

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
  }
}

/**
 * saga watcher that is triggered when dispatching action of type
 */
export function* signupWatcherSaga() {
  yield takeLatest('SIGNUP_WATCHER', signupEffectSaga);
}

export function* signupResendWatcherSaga() {
  yield takeLatest('SIGNUP_RESEND_WATCHER', signupResendEffectSaga);
}

export function* signupFacebookWatcherSaga() {
  yield takeLatest('SIGNUP_FACEBOOK_WATCHER', signupFacebookEffectSaga);
}

export function* signupLinkedinWatcherSaga() {
  yield takeLatest('SIGNUP_LINKEDIN_WATCHER', signupLinkedinEffectSaga);
}
