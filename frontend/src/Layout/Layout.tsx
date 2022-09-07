import React, { FC } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardsList from '../components/cards/CardsList';

const Layout: FC = () => {
  return (
    <>
      <Container>
        <Row>
          <Col sm={12}>
            <CardsList />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Layout;
