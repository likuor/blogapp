import React, { FC } from 'react';
import LoginFormCom from '../components/form/auth/LoginFormCom';
import Layout from '../Layout/Layout';

const LoginCom: FC = () => {
  return (
    <Layout>
      <LoginFormCom />
    </Layout>
  );
};

export default LoginCom;
