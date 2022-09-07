import React, { useState, useEffect } from 'react';
import Layout from './Layout/Layout';
import NavbarCom from './components/NavbarCom';

type type = {
  users: string[];
};

function App() {
  const [backendData, setBackendData] = useState<type>();

  useEffect(() => {
    fetch('/api')
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  return (
    <>
      {/* {backendData === undefined ? (
        <p>Loading...</p>
      ) : (
        backendData.users.map((user, index) => <p key={index}>{user}</p>)
      )} */}
      <NavbarCom />
      <Layout />
    </>
  );
}

export default App;
