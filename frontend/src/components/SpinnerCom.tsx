import React, { FC } from 'react';
import Spinner from 'react-bootstrap/Spinner';

const SpinnerCom: FC = () => {
  return (
    <Spinner
      style={{ height: '50px', width: '50px' }}
      variant='success'
      animation='grow'
    />
  );
};

export default SpinnerCom;
