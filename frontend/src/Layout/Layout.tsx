import React, { FC } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface LayoutType {
  children: React.ReactNode;
}

const Layout: FC<LayoutType> = ({ children }) => {
  return (
    <>
      <Container>
        <Row>
          <Col sm={12}>{children}</Col>
        </Row>
      </Container>
    </>
  );
};

export default Layout;
