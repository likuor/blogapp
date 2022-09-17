import React, { FC } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

interface Props {
  show: boolean;
  setShow: (active: boolean) => void;
  article: { title: string; contents: string; caption: string };
}

const ModalCom: FC<Props> = (props) => {
  const { show, setShow, article } = props;
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mb-3' controlId='formGroupText'>
              <Form.Label>Title</Form.Label>
              {/* <Form.Control type='text' placeholder='Title' ref={refText} /> */}
              <Form.Control
                type='text'
                placeholder='Title'
                defaultValue={article.title}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formGroupText'>
              <Form.Label>Caption</Form.Label>
              {/* <Form.Control
                type='text'
                placeholder='Caption'
                ref={refCaption}
              /> */}
              <Form.Control
                type='text'
                placeholder='Caption'
                defaultValue={article.caption}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formGroupText'>
              <Form.Label>Contents</Form.Label>
              {/* <Form.Control
                type='textarea'
                placeholder='Contents'
                ref={refContents}
              /> */}
              <Form.Control
                type='textarea'
                placeholder='Contents'
                defaultValue={article.contents}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalCom;
