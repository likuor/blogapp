import React, { FC } from 'react';
import SignupFormCom from '../components/form/auth/SignupFormCom';
import Layout from '../Layout/Layout';
import { Link } from 'react-router-dom';
import ButtonCom from '../components/ButtonCom';

const SignupCom: FC = () => {
  return (
    <Layout>
      <SignupFormCom />
      <Link to={'/login'}>
        <ButtonCom color='success' text='Login' type='button' />
      </Link>
    </Layout>
  );
};

export default SignupCom;
