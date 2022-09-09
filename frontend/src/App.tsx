import React from 'react';
import NavbarCom from './components/NavbarCom';
import { Routes, Route } from 'react-router-dom';
import FormCom from './components/form/FormCom';
import CardsList from './components/cards/CardsList';

function App() {
  return (
    <>
      <NavbarCom />
      <Routes>
        <Route path='/' element={<CardsList />} />
        <Route path='/create' element={<FormCom />} />
      </Routes>
    </>
  );
}

export default App;
