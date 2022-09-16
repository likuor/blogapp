import React, { FC, useContext, useRef } from 'react';
import Button from '../../ButtonCom';
import Form from 'react-bootstrap/Form';
import { loginCall } from '../../../dispatch';
import { AuthContext } from '../../../state/AuthContext';

const LoginFormCom: FC = () => {
  const refEmail = useRef<HTMLInputElement>(null);
  const refPassword = useRef<HTMLInputElement>(null);
  const { dispatch } = useContext(AuthContext);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    loginCall(
      {
        email: refEmail.current?.value,
        password: refPassword.current?.value,
      },
      dispatch
    );
  };

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <Form.Group className='mb-3' controlId='loginFormEmail'>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type='email'
          placeholder='Enter email'
          required
          ref={refEmail}
        />
        <Form.Text className='text-muted'>
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className='mb-3' controlId='loginFormPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type='password'
          placeholder='Password'
          minLength={6}
          required
          ref={refPassword}
        />
      </Form.Group>

      <Button text='Login' color='primary' type='submit' />
    </Form>
  );
};

export default LoginFormCom;
