import React, { FC } from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import CardCom from './CardCom';
import Layout from '../../Layout/Layout';

const CardsList: FC = () => {
  return (
    <Layout>
      <CardGroup>
        <CardCom />
      </CardGroup>
    </Layout>
  );
};

export default CardsList;
