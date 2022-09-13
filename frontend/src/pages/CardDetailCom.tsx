import React, { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import SpinnerCom from '../components/SpinnerCom';
import ButtonCom from '../components/ButtonCom';

interface articleObj {
  title: string;
  contents: string;
  caption: string;
  _id: string;
  updatedAt: string;
}

const CardDetailCom: FC = () => {
  const [article, setArticle] = useState<articleObj | undefined>(undefined);
  const params = useParams();

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await axios.get('/posts');
      const filterdData = response.data.filter(
        (article: articleObj) => article._id === params.id
      );
      const data = filterdData[0];
      setArticle(data);
    };
    fetchArticles();
  }, [params]);

  const renderTime = () => {
    if (article) {
      const date = new Date(article.updatedAt);
      return date.toLocaleString();
    }
  };

  const deleteBlog = () => {
    console.log('delete');
  };

  return (
    <Container>
      <Row className='justify-content-center'>
        {article ? (
          <>
            <h1>{article.title}</h1> <span>{renderTime()}</span>
            <span>
              <ButtonCom
                color='danger'
                text='Delete'
                onClick={() => deleteBlog()}
              />
            </span>
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
