import React, { FC } from 'react';
import Button from 'react-bootstrap/Button';

type ButtonColor = {
  color: string;
  onClick: () => void;
};

const ButtonCom: FC<ButtonColor> = (props) => {
  const { color, onClick } = props;

  return (
    <Button variant={color} onClick={onClick}>
      Delete
    </Button>
  );
};

export default ButtonCom;
