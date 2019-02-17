const getInitialState = () => ({
  data: {},
  errors: {},
  email: ''
});

function forgot(state = getInitialState(), { type, payload }) {
  switch (type) {
    case 'SET_FORGOT_ERROR':
      return {
        ...state,
        data: {},
        errors: payload
      };
    case 'SET_FORGOT_SUCCESS':
      return {
        ...state,
        errors: {},
        data: payload
      };
    case 'SET_EMAIL_FORGOT':
      return {
        ...state,
        email: payload
      };
    default:
      return state;
  }
}

export default forgot;
