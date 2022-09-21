import React, { FC, useState, useEffect, useContext } from 'react';
import Layout from '../Layout/Layout';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AuthContext } from '../state/AuthContext';

interface LoginState {
  user: {
    createdAt: string;
    description: string;
    email: string;
    isAdmin: boolean;
    password: string;
    profilePicture: string;
    updatedAt: string;
    username: string;
    __v?: number;
    _id: string | null;
  } | null;
}

const ProfileCom: FC = () => {
  const { user }: LoginState = useContext(AuthContext);
  console.log(user);

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
          <Col>Username: {user?.username}</Col>
        </Row>
        <Row>
          <Col>Email: {user?.email}</Col>
        </Row>
        <Row>
          <Col>
            <img src={user?.profilePicture} alt={`${user?.username} pic`} />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default ProfileCom;
