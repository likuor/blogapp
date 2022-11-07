import React, { FC, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { AuthContext } from '../../state/AuthContext';
import BadgeCom from '../BadgeCom';

interface DataProps {
  article: {
    title: string;
    contents: string;
    caption: string;
    category: string;
    image?: { data: string; type: string };
    user: {
      userId: string;
      username: string;
      profilePicture: string;
    };
    _id: string;
    updatedAt: string;
  };
}

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

const CardCom: FC<DataProps> = (props) => {
  const { user }: LoginState = useContext(AuthContext);
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
    <Card
      onClick={onClick}
      style={{ cursor: 'pointer', margin: '0.8rem' }}
      border={article.user.userId === user?._id ? 'primary' : 'none'}
    >
      <Card.Img
        variant='top'
        src={`${process.env.PUBLIC_URL}/image/blogSample.jpg`}
      />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text>{article.caption}</Card.Text>
        <Card.Text>{article.user.username}</Card.Text>
        <BadgeCom category={article.category} />
      </Card.Body>
      <Card.Footer>
        <small className='text-muted'>Last updated {renderTime()}</small>
      </Card.Footer>
    </Card>
  );
};

export default CardCom;
