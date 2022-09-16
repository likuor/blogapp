import React, { FC, useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import SpinnerCom from '../components/SpinnerCom';
import ButtonCom from '../components/ButtonCom';
import { AuthContext } from '../state/AuthContext';
import { useNavigate } from 'react-router-dom';

interface articleObj {
  title: string;
  contents: string;
  caption: string;
  _id: string;
  userId: string;
  updatedAt: string;
}

const CardDetailCom: FC = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [article, setArticle] = useState<articleObj | undefined>(undefined);
  const params = useParams();

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await axios.get(`/posts/${params.id}`);
      setArticle(response.data);
    };
    fetchArticles();
  }, [params]);

  const renderTime = () => {
    if (article) {
      const date = new Date(article.updatedAt);
      return date.toLocaleString();
    }
  };

  const deleteArticle = async () => {
    await axios.delete(`/posts/${params.id}`);
    navigate('/');
  };

  const editArticle = async () => {
    console.log('edit');
  };

  return (
    <Container>
      <Row className='justify-content-center'>
        {article ? (
          <>
            <h1>{article.title}</h1> <span>{renderTime()}</span>
            {user && user._id === article.userId && (
              <span>
                <ButtonCom
                  color='success'
                  text='Edit'
                  onClick={editArticle}
                  type='submit'
                />
              </span>
            )}
            {user && user._id === article.userId && (
              <span>
                <ButtonCom
                  color='danger'
                  text='Delete'
                  onClick={deleteArticle}
                  type='submit'
                />
              </span>
            )}
            <Col md={7}>{article.contents}</Col>
            <Col md={5}>
              <Image
                fluid
                src={`${process.env.PUBLIC_URL}/image/blogSample.jpg`}
              />
            </Col>
          </>
        ) : (
          <Col
            xs='auto'
            style={{
              height: '80vh',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <SpinnerCom />
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default CardDetailCom;
