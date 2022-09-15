import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

interface DataProps {
  article: {
    title: string;
    contents: string;
    caption: string;
    userId: string;
    _id: string;
    updatedAt: string;
  };
}

const CardCom: FC<DataProps> = (props) => {
  const { article } = props;
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/detail/${article._id}`);
  };

  const renderTime = () => {
    const date = new Date(article.updatedAt);
    return date.toLocaleString();
  };

  return (
    <Card onClick={onClick} style={{ cursor: 'pointer' }}>
      <Card.Img
        variant='top'
        src={`${process.env.PUBLIC_URL}/image/blogSample.jpg`}
      />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text>{article.caption}</Card.Text>
        <Card.Text>{article.userId}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className='text-muted'>Last updated {renderTime()}</small>
      </Card.Footer>
    </Card>
  );
};

export default CardCom;
