import React, { FC, useState, useEffect } from 'react';
import CardCom from './CardCom';
import axios from 'axios';

interface blogObj {
  title: string;
  contents: string;
  caption: string;
  _id: string;
}

const AllCards = () => {
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
    <>
      {blogData
        ? blogData.map((blog: any) => <CardCom blog={blog} key={blog._id} />)
        : 'Loading ...'}
    </>
  );
};

export default AllCards;
