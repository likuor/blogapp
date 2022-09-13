import React, { FC } from 'react';
import ButtonCom from '../../../components/ButtonCom';
import Form from 'react-bootstrap/Form';

const LoginFormCom: FC = () => {
  return (
    <Form>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Email address</Form.Label>
        <Form.Control type='email' placeholder='Enter email' />
        <Form.Text className='text-muted'>
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control type='password' placeholder='Password' />
      </Form.Group>

      <ButtonCom color='primary' text='Login' />
    </Form>
  );
};

export default LoginFormCom;
