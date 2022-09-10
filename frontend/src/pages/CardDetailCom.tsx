import React, { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

interface blogObj {
  title: string;
  contents: string;
  caption: string;
  _id: string;
  time: number;
}

const CardDetailCom: FC = () => {
  const [blogData, setBlogData] = useState<blogObj | undefined>(undefined);
  const params = useParams();

  useEffect(() => {
    axios
      .get('/api/v1/posts')
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
      const date = new Date(blogData.time);
      return date.toLocaleString();
    }
  };

  return (
    <Container>
      {blogData && (
        <Row>
          <h1>{blogData.title}</h1> <span>{renderTime()}</span>
          <Col>{blogData.contents}</Col>
          <Col>
            <Image
              fluid
              src={`${process.env.PUBLIC_URL}/image/blogSample.jpg`}
            />
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default CardDetailCom;
