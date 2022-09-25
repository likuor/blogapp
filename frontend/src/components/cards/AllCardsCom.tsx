import React, { FC, useState, useEffect } from 'react';
import CardCom from './CardCom';
import axios from 'axios';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import SpinnerCom from '../SpinnerCom';

interface articleObj {
  title: string;
  contents: string;
  caption: string;
  _id: string;
  image: string;
  category: string;
  user: {
    userId: string;
    username: string;
    profilePicture: string;
  };
  updatedAt: string;
}

const AllCards: FC = () => {
  const [articles, setArticles] = useState<articleObj[] | undefined>(undefined);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await axios.get('/posts');
      setArticles(response.data);
    };
    fetchArticles();
  }, []);

  return (
    <Row className='justify-content-center'>
      {articles ? (
        <CardGroup>
          {articles.map((article: any) => (
            <Col sm={6} md={4} key={article._id}>
              <CardCom article={article} />
            </Col>
          ))}
        </CardGroup>
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
  );
};

export default AllCards;
