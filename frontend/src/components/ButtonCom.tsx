import React, { FC } from 'react';
import Button from 'react-bootstrap/Button';

type ButtonColor = {
  color: string;
  text: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
};

const ButtonCom: FC<ButtonColor> = (props) => {
  const { color, onClick, text, type } = props;

  return (
    <Button variant={color} onClick={onClick} type={type}>
      {text}
    </Button>
  );
};

export default ButtonCom;
