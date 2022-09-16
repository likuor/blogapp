import { createContext, ReactNode, useEffect, useReducer } from 'react';
import AuthReducer from './AuthReducer';

const initialState: LoginState = {
  user: JSON.parse(localStorage.getItem('user') || 'null'),
  isFetching: false,
  error: false,
};

interface LoginState {
  user: {
    createdAt: string;
    description: string;
    email: string;
    isAdmin: boolean;
    password: string;
    profilePicture: string;
    updatedAt: string;
    username: string;
    __v?: number;
    _id: string | null;
  } | null;
  isFetching: boolean;
  error: any;
  dispatch?: any;
}

export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.user));
  }, [state.user]);

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
