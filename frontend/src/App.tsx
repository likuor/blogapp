import React from 'react';
import NavbarCom from './components/NavbarCom';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreatePostCom from './pages/CreatePostCom';
import CardDetailCom from './pages/CardDetailCom';

function App() {
  return (
    <>
      <NavbarCom />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<CreatePostCom />} />
        <Route path='/detail/:id' element={<CardDetailCom />} />
      </Routes>
    </>
  );
}

export default App;
