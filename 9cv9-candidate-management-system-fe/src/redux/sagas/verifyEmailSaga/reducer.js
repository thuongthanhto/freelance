const getInitialState = () => ({
  data: {},
  errors: {}
});

function verifyEmail(state = getInitialState(), { type, payload }) {
  switch (type) {
    case 'SET_VERIFY_EMAIL_ERROR':
      return {
        ...state,
        data: {},
        errors: payload
      };
    case 'SET_VERIFY_EMAIL_SUCCESS':
      return {
        ...state,
        errors: {},
        data: payload
      };
    default:
      return state;
  }
}

export default verifyEmail;
