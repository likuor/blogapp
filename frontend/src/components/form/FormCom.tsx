import React, { FC } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const FormCom: FC = () => {
  return (
    <div>
      <Form>
        <Form.Group className='mb-3' controlId='formGroupText'>
          <Form.Label>Title</Form.Label>
          <Form.Control type='text' placeholder='Title' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formGroupText'>
          <Form.Label>Caption</Form.Label>
          <Form.Control type='text' placeholder='Caption' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formGroupText'>
          <Form.Label>Contents</Form.Label>
          <Form.Control type='textarea' placeholder='Contents' />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Post
        </Button>
      </Form>
    </div>
  );
};

export default FormCom;
