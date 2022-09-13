import React, { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import SpinnerCom from '../components/SpinnerCom';
import ButtonCom from '../components/ButtonCom';

interface blogObj {
  title: string;
  contents: string;
  caption: string;
  _id: string;
  updatedAt: string;
}

const CardDetailCom: FC = () => {
  const [blogData, setBlogData] = useState<blogObj | undefined>(undefined);
  const params = useParams();

  useEffect(() => {
    axios
      .get('/api/posts')
      .then((response: any) => {
        const filterdData = response.data.filter(
          (blog: blogObj) => blog._id === params.id
        );
        const data = filterdData[0];
        setBlogData(data);
      })
      .catch((error) => console.log(error));
  }, [params]);

  const renderTime = () => {
    if (blogData) {
      const date = new Date(blogData.updatedAt);
      return date.toLocaleString();
    }
  };

  const deleteBlog = () => {
    console.log('delete');
  };

  return (
    <Container>
      <Row className='justify-content-center'>
        {blogData ? (
          <>
            <h1>{blogData.title}</h1> <span>{renderTime()}</span>
            <span>
              <ButtonCom
                color='danger'
                text='Delete'
                onClick={() => deleteBlog()}
              />
            </span>
            <Col md={7}>{blogData.contents}</Col>
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
