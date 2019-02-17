const getInitialState = () => ({
  data: {},
  errors: {}
});

function resetPassword(state = getInitialState(), { type, payload }) {
  switch (type) {
    case 'SET_RESET_PASSWORD_ERROR':
      return {
        ...state,
        data: {},
        errors: payload
      };
    case 'SET_RESET_PASSWORD_SUCCESS':
      return {
        ...state,
        errors: {},
        data: payload
      };
    default:
      return state;
  }
}

export default resetPassword;
