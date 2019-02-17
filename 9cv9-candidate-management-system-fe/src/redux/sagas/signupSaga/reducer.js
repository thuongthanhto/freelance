const getInitialState = () => ({
  data: { detail: '' },
  errors: {},
  email: '',
  loading: false
});

function register(state = getInitialState(), { type, payload }) {
  switch (type) {
    case 'SET_SIGNUP_ERROR':
      return {
        ...state,
        data: {},
        loading: false,
        errors: payload
      };
    case 'ENABLE_LOADING':
      return {
        ...state,
        loading: true
      };
    case 'DISABLE_LOADING':
      return {
        ...state,
        loading: false
      };
    case 'SET_SIGNUP_SUCCESS':
      return {
        ...state,
        errors: {},
        loading: false,
        data: payload
      };
    case 'SET_EMAIL_REGISTER':
      return {
        ...state,
        email: payload
      };
    case 'RESET_FORM_SIGNUP':
      return getInitialState;
    default:
      return state;
  }
}

export default register;
