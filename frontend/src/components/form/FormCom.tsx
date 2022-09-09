import React, { FC, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Layout from '../../Layout/Layout';

const FormCom: FC = () => {
  const refText = useRef<HTMLInputElement>(null);
  const refCaption = useRef<HTMLInputElement>(null);
  const refContents = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    const newPost = {
      title: refText.current?.value,
      caption: refCaption.current?.value,
      contents: refContents.current?.value,
    };

    axios
      .post('/api/v1/post', newPost)
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
        <Button variant='primary' type='submit' onClick={handleSubmit}>
          Post
        </Button>
      </Form>
    </Layout>
  );
};

export default FormCom;
