import axios from 'axios';

interface LoginValue {
  email: string | undefined;
  password: string | undefined;
}

interface UpdateValue {
  username?: string | undefined;
  email?: string | undefined;
  description?: string | undefined;
  profilepicture?: string | undefined;
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

export const logoutCall = async (dispatch: any) => {
  dispatch({ type: 'LOGIN_START' });
};

export const updateCall = async (
  update: UpdateValue,
  userId: string,
  dispatch: any
) => {
  try {
    const updatedUser = {
      userId: userId,
      username: update.username,
      description: update.description,
      email: update.email,
      profilepicture: update.profilepicture,
    };
    const res = await axios.put(`users/${userId}`, updatedUser);
    // console.log('data', await res.data);

    await dispatch({ type: 'UPDATE_SUCCESS', payload: res.data });
  } catch (err) {
    dispatch({ type: 'LOGIN_ERROR', payload: err });
  }
};
