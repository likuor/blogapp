import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

interface DataProps {
  blog: {
    title: string;
    contents: string;
    caption: string;
    _id: string;
    time: number;
  };
}

const CardCom: FC<DataProps> = (props) => {
  const { blog } = props;
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/detail/${blog._id}`);
  };

  const renderTime = () => {
    const date = new Date(blog.time);
    return date.toLocaleString();
  };

  return (
    <Card onClick={onClick} style={{ cursor: 'pointer' }}>
      <Card.Img
        variant='top'
        src={`${process.env.PUBLIC_URL}/image/blogSample.jpg`}
      />
      <Card.Body>
        <Card.Title>{blog.title}</Card.Title>
        <Card.Text>{blog.caption}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className='text-muted'>Last updated {renderTime()}</small>
      </Card.Footer>
    </Card>
  );
};

export default CardCom;
