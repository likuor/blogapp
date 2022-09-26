import React, { FC } from 'react';
import Stack from 'react-bootstrap/Stack';

interface LayoutType {
  children: React.ReactNode;
  direction: string;
}

const StackLayout: FC<LayoutType> = ({ children, direction }) => {
  const switchDirection = (direction: string) => {
    switch (direction) {
      case 'vertical':
        return 'vertical';
      case 'horizontal':
        return 'horizontal';
      default:
        break;
    }
  };

  return (
    <>
      {direction && (
        <Stack
          gap={3}
          className='col-md-5 mx-auto'
          direction={switchDirection(direction)}
        >
          {children}
        </Stack>
      )}
    </>
  );
};

export default StackLayout;
