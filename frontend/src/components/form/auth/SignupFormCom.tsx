import React, { FC, useRef } from 'react';
import ButtonCom from '../../ButtonCom';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import StackLayout from '../../../Layout/StackLayout';

const SignupFormCom: FC = () => {
  const refUserName = useRef<HTMLInputElement>(null);
  const refEmail = useRef<HTMLInputElement>(null);
  const refPassword = useRef<HTMLInputElement>(null);
  const refPasswordConfirmation = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    // e.preventDefault();
    if (refPassword.current?.value !== refPasswordConfirmation.current?.value) {
      refPasswordConfirmation.current?.setCustomValidity('Password is wrong');
    } else {
      try {
        const user = {
          username: refUserName.current?.value,
          email: refEmail.current?.value,
          password: refPasswordConfirmation.current?.value,
        };

        await axios.post(
          process.env.REACT_APP_SERVER_URL + '/auth/signup',
          user
        );
        navigate('/login');
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <Form.Group className='mb-3' controlId='signupFormUserName'>
        <Form.Label>User name</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter user name'
          required
          ref={refUserName}
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId='signupFormEmail'>
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

      <Form.Group className='mb-3' controlId='signupFormPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type='password'
          placeholder='Password'
          required
          minLength={6}
          ref={refPassword}
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId='signupFormPasswordConfirmation'>
        <Form.Label>Confiram Password</Form.Label>
        <Form.Control
          type='password'
          placeholder='Confiram Password'
          required
          minLength={6}
          ref={refPasswordConfirmation}
        />
      </Form.Group>

      <StackLayout direction='vertical'>
        <ButtonCom
          color='success'
          text='Sign up'
          type='submit'
          onClick={() => navigate('/signup')}
        />
        <ButtonCom
          text='Login'
          color='primary'
          type='button'
          onClick={() => navigate('/login')}
        />
      </StackLayout>
    </Form>
  );
};

export default SignupFormCom;
