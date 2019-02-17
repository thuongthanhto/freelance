import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';
import { reducer as testSaga } from './sagas/testSaga/reducer';
import register from './sagas/signupSaga/reducer';
import verifyEmail from './sagas/verifyEmailSaga/reducer';
import forgot from './sagas/forgotSaga/reducer';
import resetPassword from './sagas/resetPassword/reducer';
import login from './sagas/loginSaga/reducer';

const reducers = history =>
  combineReducers({
    testSaga,
    resetPassword,
    login,
    forgot,
    register,
    verifyEmail,
    form: formReducer,
    router: connectRouter(history)
  });

export default reducers;
