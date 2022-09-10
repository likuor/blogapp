import React, { FC } from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Layout from '../Layout/Layout';
import AllCardsCom from '../components/cards/AllCardsCom';

const CardsList: FC = () => {
  return (
    <Layout>
      <CardGroup>
        <AllCardsCom />
      </CardGroup>
    </Layout>
  );
};

export default CardsList;
