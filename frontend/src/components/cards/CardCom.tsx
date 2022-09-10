import React, { FC } from 'react';
import Card from 'react-bootstrap/Card';

interface DataProps {
  blog: {
    title: string | undefined;
    contents: string;
    caption: string;
    _id: string;
  };
}

const CardCom: FC<DataProps> = (props) => {
  const { blog } = props;
  console.log(blog);

  return (
    <Card>
      <Card.Img
        variant='top'
        src={`${process.env.PUBLIC_URL}/image/blogSample.jpg`}
      />
      <Card.Body>
        <Card.Title>{blog.title}</Card.Title>
        <Card.Text>{blog.caption}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className='text-muted'>Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
  );
};

export default CardCom;
