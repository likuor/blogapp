import React, { useContext } from 'react';
import NavbarCom from './components/NavbarCom';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomeCom from './pages/HomeCom';
import EnglishCom from './pages/EnglishCom';
import AllProgrammingCardsCom from './pages/ProgrammingCom';
import CreatePostCom from './pages/CreatePostCom';
import CardDetailCom from './pages/CardDetailCom';
import LoginCom from './pages/LoginCom';
import SignupCom from './pages/SignupCom';
import ProfileCom from './pages/ProfileCom';
import { AuthContext } from './state/AuthContext';

function App() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <NavbarCom />
      <Routes>
        <Route path='/' element={<HomeCom />} />
        <Route path='/english' element={<EnglishCom />} />
        <Route path='/programming' element={<AllProgrammingCardsCom />} />
        <Route
          path='/create'
          element={user ? <CreatePostCom /> : <LoginCom />}
        />
        <Route path='/detail/:id' element={<CardDetailCom />} />
        <Route
          path='/login'
          element={user ? <Navigate to='/' /> : <LoginCom />}
        />
        <Route path='/mypage' element={user ? <ProfileCom /> : <LoginCom />} />
        <Route
          path='/signup'
          element={user ? <Navigate to='/' /> : <SignupCom />}
        />
      </Routes>
    </>
  );
}

export default App;
