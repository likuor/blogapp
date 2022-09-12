import React, { FC } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SignupFormCom: FC = () => {
  return (
    <Form>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>User name</Form.Label>
        <Form.Control type='text' placeholder='Enter user name' />
      </Form.Group>

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

      <Form.Group className='mb-3' controlId='formBasicPassword'>
        <Form.Label>Confiram Password</Form.Label>
        <Form.Control type='password' placeholder='Confiram Password' />
      </Form.Group>

      <Button variant='primary' type='submit'>
        Signup
      </Button>
    </Form>
  );
};

export default SignupFormCom;
