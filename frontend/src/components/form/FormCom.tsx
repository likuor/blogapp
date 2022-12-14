import React, { FC, useRef, useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Layout from '../../Layout/Layout';
import { AuthContext } from '../../state/AuthContext';
import ButtonCom from '../ButtonCom';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const { user }: LoginState = useContext(AuthContext);
  const refText = useRef<HTMLInputElement>(null);
  const refCaption = useRef<HTMLInputElement>(null);
  const refContents = useRef<HTMLTextAreaElement>(null);
  const refCategory = useRef<HTMLSelectElement>(null);
  const [file, setFile] = useState<{ data: string; type: string }>();

  const handleSubmit = () => {
    const newPost = {
      userId: user?._id,
      title: refText.current?.value,
      caption: refCaption.current?.value,
      contents: refContents.current?.value,
      category: refCategory.current?.value,
      image: file,
    };

    axios
      .post(process.env.REACT_APP_SERVER_URL + '/posts/create', newPost)
      .then(() => {
        navigate('/');
      })
      .catch((error) => console.log('error', error));
  };

  return (
    <Layout>
      <Form>
        <Form.Group className='mb-3' controlId='formGroupTitle'>
          <Form.Label>Title</Form.Label>
          <Form.Control type='text' placeholder='Title' ref={refText} />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formGroupCaption'>
          <Form.Label>Caption</Form.Label>
          <Form.Control type='text' placeholder='Caption' ref={refCaption} />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formGroupContents'>
          <Form.Label>Contents</Form.Label>
          <Form.Control
            as='textarea'
            rows={20}
            placeholder='Contents'
            ref={refContents}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formGroupCategory'>
          <Form.Label>Category</Form.Label>
          <Form.Select aria-label='Default select example' ref={refCategory}>
            <option>Select category</option>
            <option value='all'>All</option>
            <option value='english'>English</option>
            <option value='programming'>Programming</option>
          </Form.Select>
        </Form.Group>
        <Form.Group controlId='formFile' className='mb-3'>
          <Form.Label>Article Image</Form.Label>
          <Form.Control
            type='file'
            placeholder='image'
            name='formFile'
            accept='.png, .jpeg, .jpg'
            onChange={(e) => {
              const fileName = (e.target as HTMLInputElement).files![0].name;
              const fileType = (e.target as HTMLInputElement).files![0].type;
              setFile({ data: fileName, type: fileType });
            }}
          />
        </Form.Group>
      </Form>
      <ButtonCom
        text='Post'
        color='primary'
        type='submit'
        onClick={handleSubmit}
      />
    </Layout>
  );
};

export default FormCom;
