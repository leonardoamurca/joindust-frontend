import React from 'react';
import { useAuth } from '../../context/auth';

function Home({ children }) {
  const auth = useAuth();

  return (
    <>
      <h1>Auth Producer App</h1>
      <button onClick={auth.logout}>logout</button>
      {children}
    </>
  );
}

export default Home;
