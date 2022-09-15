import { createContext, ReactNode, useReducer } from 'react';
import AuthReducer from './AuthReducer';

const initialState: LoginState = {
  user: null,
  // user: {
  //   email: null,
  //   password: null,
  // },
  isFetching: false,
  error: false,
};

interface LoginState {
  user: any;
  // user: {
  //   email: string | null;
  //   password: string | null;
  // };
  isFetching: boolean;
  error: any;
  dispatch?: any;
}

export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
