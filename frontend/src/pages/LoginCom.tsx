import React, { FC } from 'react';
import LoginFormCom from '../components/form/auth/LoginFormCom';
import Layout from '../Layout/Layout';
import { Link } from 'react-router-dom';
import ButtonCom from '../components/ButtonCom';

const LoginCom: FC = () => {
  return (
    <Layout>
      <LoginFormCom />
      <Link to={'/forgotpassword'}>forgot password?</Link>
      <Link to={'/signup'}>
        <ButtonCom color='success' text='Sign up' type='button' />
      </Link>
    </Layout>
  );
};

export default LoginCom;
