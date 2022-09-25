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
import ModalCom from '../components/ModalCom';
import BadgeCom from '../components/BadgeCom';

interface articleObj {
  title: string;
  contents: string;
  caption: string;
  category: string;
  _id: string;
  userId: string;
  updatedAt: string;
}

const CardDetailCom: FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
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
  }, [params, isUpdated]);

  const renderTime = () => {
    if (article) {
      const date = new Date(article.updatedAt);
      return date.toLocaleString();
    }
  };

  const deleteArticle = () => {
    axios
      .delete(`/posts/${params.id}`)
      .then(() => {
        navigate('/');
      })
      .catch((error) => console.log('error', error));
  };

  const editArticle = () => {
    setShowModal(true);
  };

  return (
    <Container>
      <Row className='justify-content-center'>
        {article ? (
          <>
            <h1>{article.title}</h1> <span>{renderTime()}</span>
            <BadgeCom category={article.category} />
            <Col md={7}>{article.contents}</Col>
            <Col md={5}>
              <Image
                fluid
                src={`${process.env.PUBLIC_URL}/image/blogSample.jpg`}
              />
            </Col>
            <Col>
              {user && user._id === article.userId && (
                <>
                  <span>
                    <ButtonCom
                      color='success'
                      text='Edit'
                      onClick={editArticle}
                      type='submit'
                    />
                  </span>
                  <span>
                    <ButtonCom
                      color='danger'
                      text='Delete'
                      onClick={deleteArticle}
                      type='submit'
                    />
                  </span>
                  <ModalCom
                    showModal={showModal}
                    setShowModal={setShowModal}
                    isUpdated={isUpdated}
                    setIsUpdated={setIsUpdated}
                    article={article}
                  />
                </>
              )}
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
