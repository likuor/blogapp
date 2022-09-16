import React, { FC, useRef, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Layout from '../../Layout/Layout';
import { AuthContext } from '../../state/AuthContext';
import Button from '../ButtonCom';

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

const FormCom: FC = () => {
  const { user }: LoginState = useContext(AuthContext);
  const refText = useRef<HTMLInputElement>(null);
  const refCaption = useRef<HTMLInputElement>(null);
  const refContents = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    const newPost = {
      userId: user?._id,
      title: refText.current?.value,
      caption: refCaption.current?.value,
      contents: refContents.current?.value,
    };

    axios
      .post('/posts/create', newPost)
      .then((response: any) => {
        console.log(response);
      })
      .catch((error) => console.log('error', error));
  };

  return (
    <Layout>
      <Form>
        <Form.Group className='mb-3' controlId='formGroupText'>
          <Form.Label>Title</Form.Label>
          <Form.Control type='text' placeholder='Title' ref={refText} />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formGroupText'>
          <Form.Label>Caption</Form.Label>
          <Form.Control type='text' placeholder='Caption' ref={refCaption} />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formGroupText'>
          <Form.Label>Contents</Form.Label>
          <Form.Control
            type='textarea'
            placeholder='Contents'
            ref={refContents}
          />
        </Form.Group>

        <Button
          text='Post'
          color='primary'
          type='submit'
          onClick={handleSubmit}
        />
      </Form>
    </Layout>
  );
};

export default FormCom;
