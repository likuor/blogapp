interface LoginState {
  user: any;
  isFetching: boolean;
  error: any | boolean;
}

interface LoginAction {
  type: 'LOGIN_START' | 'LOGIN_SUCCESS' | 'LOGIN_ERROR' | 'UPDATE_SUCCESS';
  payload: any;
}

const AuthReducer = (state: LoginState, action: LoginAction) => {
  switch (action.type) {
    case 'LOGIN_START':
      return {
        user: null,
        isFetching: true,
        error: false,
      };

    case 'LOGIN_SUCCESS':
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };

    case 'UPDATE_SUCCESS':
      // console.log('action here', action);

      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };

    case 'LOGIN_ERROR':
      return {
        user: null,
        isFetching: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default AuthReducer;
