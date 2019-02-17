import { all, fork } from 'redux-saga/effects';

import testSaga from './testSaga/saga';
import {
  signupWatcherSaga,
  signupFacebookWatcherSaga,
  signupLinkedinWatcherSaga,
  signupResendWatcherSaga
} from './signupSaga/saga';
import { verifyEmailWatcherSaga } from './verifyEmailSaga/saga';
import { loginWatcherSaga } from './loginSaga/saga';
import { forgotWatcherSaga } from './forgotSaga/saga';
import { resetPasswordWatcherSaga } from './resetPassword/saga';

export default function* root() {
  yield all([
    fork(signupResendWatcherSaga),
    fork(signupLinkedinWatcherSaga),
    fork(signupFacebookWatcherSaga),
    fork(resetPasswordWatcherSaga),
    fork(forgotWatcherSaga),
    fork(loginWatcherSaga),
    fork(verifyEmailWatcherSaga),
    fork(signupWatcherSaga),
    fork(testSaga)
  ]);
}
