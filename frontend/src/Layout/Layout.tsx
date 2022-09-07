import React, { FC } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardsList from '../components/cards/CardsList';
import FormCom from '../components/form/FormCom';

const Layout: FC = () => {
  return (
    <>
      <Container>
        <Row>
          <Col sm={12}>
            <CardsList />
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <FormCom />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Layout;
