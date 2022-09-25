import React, { FC } from 'react';
import Badge from 'react-bootstrap/Badge';

interface BadgeType {
  category: string;
}

const switchColor = (param: string) => {
  switch (param) {
    case 'all':
      return 'primary';
    case 'english':
      return 'success';
    case 'programming':
      return 'warning';
    default:
      return 'secondary';
  }
};

const BadgeCom: FC<BadgeType> = (props) => {
  const { category } = props;

  return (
    <>
      <h5>
        <Badge pill bg={switchColor(category)}>
          {category}
        </Badge>
      </h5>
    </>
  );
};

export default BadgeCom;
