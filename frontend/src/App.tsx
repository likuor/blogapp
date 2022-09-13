import React from 'react';
import NavbarCom from './components/NavbarCom';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreatePostCom from './pages/CreatePostCom';
import CardDetailCom from './pages/CardDetailCom';
import LoginCom from './pages/LoginCom';
import SignupCom from './pages/SignupCom';
import ProfileCom from './pages/ProfileCom';

function App() {
  return (
    <>
      <NavbarCom />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<CreatePostCom />} />
        <Route path='/detail/:id' element={<CardDetailCom />} />
        <Route path='/login' element={<LoginCom />} />
        <Route path='/mypage/:id' element={<ProfileCom />} />
        <Route path='/signup' element={<SignupCom />} />
      </Routes>
    </>
  );
}

export default App;
