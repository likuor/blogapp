import React, { FC, useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

interface Props {
  title: string;
  contents: string;
  caption: string;
  _id: string;
}

const CardCom: FC = () => {
  const [backendData, setBackendData] = useState<Props[] | undefined>(
    undefined
  );

  useEffect(() => {
    axios
      .get('/api/v1/posts')
      .then((response: any) => {
        setBackendData(response.data);
      })
      .catch((error) => console.log(error));
  }, [backendData]);

  return (
    <>
      {backendData
        ? backendData.map((card) => (
            <Card key={card._id}>
              <Card.Img
                variant='top'
                src={`${process.env.PUBLIC_URL}/image/blogSample.jpg`}
              />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.caption}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className='text-muted'>Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          ))
        : 'Loading ...'}
    </>
  );
};

export default CardCom;
