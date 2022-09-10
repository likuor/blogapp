import React from 'react';
import NavbarCom from './components/NavbarCom';
import { Routes, Route } from 'react-router-dom';
import FormCom from './components/form/FormCom';
import Home from './pages/Home';

function App() {
  return (
    <>
      <NavbarCom />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<FormCom />} />
      </Routes>
    </>
  );
}

export default App;
