const getInitialState = () => ({
  data: {},
  errors: {},
  loading: false
});

function login(state = getInitialState(), { type, payload }) {
  switch (type) {
    case 'SET_LOGIN_ERROR':
      return {
        ...state,
        data: {},
        errors: payload,
        loading: false
      };
    case 'SET_LOGIN_SUCCESS':
      return {
        ...state,
        errors: {},
        data: payload,
        loading: false
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
    default:
      return state;
  }
}

export default login;
