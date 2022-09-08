import React, { FC } from 'react';

import CardGroup from 'react-bootstrap/CardGroup';
import CardCom from './CardCom';

const CardsList: FC = () => {
  return (
    <CardGroup>
      <CardCom />
    </CardGroup>
  );
};

export default CardsList;
