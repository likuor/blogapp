import React, { FC } from 'react';
import Button from 'react-bootstrap/Button';

type ButtonColor = {
  color: string;
  text: string;
  onClick?: () => void;
};

const ButtonCom: FC<ButtonColor> = (props) => {
  const { color, onClick, text } = props;

  return (
    <Button variant={color} onClick={onClick}>
      {text}
    </Button>
  );
};

export default ButtonCom;
