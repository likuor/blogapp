import React, { FC } from 'react';
import Button from '../../ButtonCom';
import Form from 'react-bootstrap/Form';

const LoginFormCom: FC = () => {
  return (
    <Form>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Email address</Form.Label>
        <Form.Control type='email' placeholder='Enter email' required />
        <Form.Text className='text-muted'>
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type='password'
          placeholder='Password'
          minLength={6}
          required
        />
      </Form.Group>

      <Button text='Login' color='primary' type='submit' />
    </Form>
  );
};

export default LoginFormCom;
