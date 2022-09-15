import axios from 'axios';

interface LoginValue {
  email: string | undefined;
  password: string | undefined;
}

export const loginCall = async (user: LoginValue, dispatch: any) => {
  dispatch({ type: 'LOGIN_START' });
  try {
    const res = await axios.post('auth/login', user);
    dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
  } catch (err) {
    dispatch({ type: 'LOGIN_ERROR', payload: err });
  }
};
