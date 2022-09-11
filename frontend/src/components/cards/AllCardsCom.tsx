import React, { FC, useState, useEffect } from 'react';
import CardCom from './CardCom';
import axios from 'axios';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import SpinnerCom from '../SpinnerCom';

interface blogObj {
  title: string;
  contents: string;
  caption: string;
  _id: string;
  updatedAt: string;
}

const AllCards: FC = () => {
  const [blogData, setBlogData] = useState<blogObj[] | undefined>(undefined);

  useEffect(() => {
    axios
      .get('/api/posts')
      .then((response: any) => {
        setBlogData(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Row className='justify-content-center'>
      {blogData ? (
        <CardGroup>
          {blogData.map((blog: any) => (
            <Col sm={6} md={4} key={blog._id}>
              <CardCom blog={blog} />
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
