import React, { FC } from 'react';
import SignupFormCom from '../components/form/auth/SignupFormCom';
import Layout from '../Layout/Layout';

const SignupCom: FC = () => {
  return (
    <Layout>
      <SignupFormCom />
    </Layout>
  );
};

export default SignupCom;
