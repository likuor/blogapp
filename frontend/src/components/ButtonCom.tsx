import React, { FC } from 'react';
import Button from 'react-bootstrap/Button';

type ButtonColor = {
  color: string;
};

const ButtonCom: FC<ButtonColor> = (props) => {
  const { color } = props;

  return <Button variant={color}>Delete</Button>;
};

export default ButtonCom;
