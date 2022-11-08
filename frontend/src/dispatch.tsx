import axios from 'axios';

interface LoginValue {
  email: string | undefined;
  password: string | undefined;
}

interface UpdateValue {
  userId: string;
  username?: string | undefined;
  email?: string | undefined;
  description?: string | undefined;
  profilepicture?: string | undefined;
}

export const loginCall = async (user: LoginValue, dispatch: any) => {
  dispatch({ type: 'LOGIN_START' });
  try {
    const res = await axios.post(
      process.env.REACT_APP_SERVER_URL + 'auth/login',
      user
    );
    dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
  } catch (err) {
    dispatch({ type: 'LOGIN_ERROR', payload: err });
  }
};

export const logoutCall = async (dispatch: any) => {
  dispatch({ type: 'LOGIN_START' });
};

export const updateCall = async (updateUser: UpdateValue, dispatch: any) => {
  try {
    const res = await axios.put(
      process.env.REACT_APP_SERVER_URL + `users/${updateUser.userId}`,
      updateUser
    );
    await dispatch({ type: 'UPDATE_SUCCESS', payload: res.data });
  } catch (err) {
    dispatch({ type: 'LOGIN_ERROR', payload: err });
  }
};
