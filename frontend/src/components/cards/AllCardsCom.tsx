import React, { FC, useState, useEffect } from 'react';
import CardCom from './CardCom';
import axios from 'axios';
import CardGroup from 'react-bootstrap/CardGroup';

interface blogObj {
  title: string;
  contents: string;
  caption: string;
  _id: string;
  time: number;
}

const AllCards: FC = () => {
  const [blogData, setBlogData] = useState<blogObj[] | undefined>(undefined);

  useEffect(() => {
    axios
      .get('/api/v1/posts')
      .then((response: any) => {
        setBlogData(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <CardGroup>
      {blogData
        ? blogData.map((blog: any) => <CardCom blog={blog} key={blog._id} />)
        : 'Loading ...'}
    </CardGroup>
  );
};

export default AllCards;
