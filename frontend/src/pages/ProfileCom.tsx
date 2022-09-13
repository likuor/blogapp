import React, { FC, useState, useEffect } from 'react';
import Layout from '../Layout/Layout';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ProfileCom: FC = () => {
  // const [user, setUser] = useState(undefined);

  // useEffect(() => {
  //   const fetchArticles = async () => {
  //     const response = await axios.get('/users?username=koki');
  //     setUser(response.data);
  //   };
  //   fetchArticles();
  // }, []);

  return (
    <Layout>
      <Container fluid>
        <Row>
          <Col>Name</Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default ProfileCom;
