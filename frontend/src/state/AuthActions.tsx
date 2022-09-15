export const LoginStart = (user: any) => ({ type: 'LOGIN START' });

export const LoginSuccess = (user: any) => ({
  type: 'LOGIN_SUCCESS',
  payload: user,
});

export const LoginError = (error: any) => ({
  type: 'LOGIN_ERROR',
  payload: error,
});
