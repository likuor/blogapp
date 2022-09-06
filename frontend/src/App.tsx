import React, { useState, useEffect } from 'react';

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
      {backendData === undefined ? (
        <p>Loading...</p>
      ) : (
        backendData.users.map((user, index) => <p key={index}>{user}</p>)
      )}
    </>
  );
}

export default App;
