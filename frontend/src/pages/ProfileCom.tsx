import React, { FC, useRef, useContext } from 'react';
import Layout from '../Layout/Layout';
import { AuthContext } from '../state/AuthContext';
import Form from 'react-bootstrap/Form';
import ButtonCom from '../components/ButtonCom';
import { updateCall } from '../dispatch';

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
    _id: string | any;
  } | null;
}

const ProfileCom: FC = () => {
  const refUserName = useRef<HTMLInputElement>(null);
  const refDescription = useRef<HTMLInputElement>(null);
  const refEmail = useRef<HTMLInputElement>(null);
  const refProfilePiture = useRef<HTMLInputElement>(null);
  const { dispatch } = useContext(AuthContext);

  const { user }: LoginState = useContext(AuthContext);

  const handleSubmit = async () => {
    const updatedUser = {
      userId: user?._id,
      username: refUserName.current?.value,
      description: refDescription.current?.value,
      email: refEmail.current?.value,
      profilePicture: refProfilePiture.current?.value,
    };

    updateCall(updatedUser, dispatch);
  };

  return (
    <Layout>
      <Form method='put' action={`users/${user?._id}`}>
        <Form.Group className='mb-3' controlId='formGroupText'>
          <Form.Label>Username: </Form.Label>
          <Form.Control
            type='text'
            placeholder='User name'
            ref={refUserName}
            defaultValue={user ? user.username : ''}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formGroupText'>
          <Form.Label>Description: </Form.Label>
          <Form.Control
            type='text'
            placeholder='Description'
            ref={refDescription}
            defaultValue={user ? user.description : ''}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formGroupText'>
          <Form.Label>Email: </Form.Label>
          <Form.Control
            type='email'
            placeholder='Email'
            ref={refEmail}
            defaultValue={user ? user.email : ''}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formGroupText'>
          <Form.Label>
            Profile piture:
            <img src={user?.profilePicture} alt={`${user?.username} pic`} />
          </Form.Label>
          <Form.Control
            type='textarea'
            placeholder='Profile piture'
            ref={refProfilePiture}
          />
        </Form.Group>
      </Form>
      <ButtonCom
        text='Update'
        color='primary'
        type='submit'
        onClick={handleSubmit}
      />
    </Layout>
  );
};

export default ProfileCom;
