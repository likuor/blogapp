import React, { FC } from 'react';
import Container from 'react-bootstrap/Container';

interface LayoutType {
  children: React.ReactNode;
}

const Layout: FC<LayoutType> = ({ children }) => {
  return <Container className='my-4'>{children}</Container>;
};

export default Layout;
