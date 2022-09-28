import React, { FC, useRef, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { AuthContext } from '../state/AuthContext';
import ButtonCom from '../components/ButtonCom';

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

interface Props {
  showModal: boolean;
  setShowModal: (active: boolean) => void;
  article: { title: string; contents: string; caption: string; _id: string };
  isUpdated: boolean;
  setIsUpdated: (active: any) => void;
}

const ModalCom: FC<Props> = (props) => {
  const { showModal, setShowModal, article, isUpdated, setIsUpdated } = props;
  const { user }: LoginState = useContext(AuthContext);
  const refText = useRef<HTMLInputElement>(null);
  const refCaption = useRef<HTMLInputElement>(null);
  const refContents = useRef<HTMLTextAreaElement>(null);

  const handleClose = () => setShowModal(false);

  const handleSubmit = () => {
    const newPost = {
      _id: article._id,
      userId: user?._id,
      title: refText.current?.value,
      caption: refCaption.current?.value,
      contents: refContents.current?.value,
    };

    axios
      .put(`/posts/${article._id}`, newPost)
      .then(() => {
        handleClose();
        setIsUpdated(() => !isUpdated);
      })
      .catch((error) => console.log('error', error));
  };

  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mb-3' controlId='formGroupText'>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type='text'
                placeholder='Title'
                ref={refText}
                defaultValue={article.title}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formGroupText'>
              <Form.Label>Caption</Form.Label>
              <Form.Control
                type='text'
                placeholder='Caption'
                ref={refCaption}
                defaultValue={article.caption}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formGroupText'>
              <Form.Label>Contents</Form.Label>
              <Form.Control
                as='textarea'
                rows={20}
                placeholder='Contents'
                defaultValue={article.contents}
                ref={refContents}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <ButtonCom
            text='Save Changes'
            color='primary'
            type='submit'
            onClick={handleSubmit}
          />
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalCom;
