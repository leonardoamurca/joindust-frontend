import React from 'react';
import { useAuth } from '../../context/auth';
import NavLink from '../../components/NavLink';

function Home({ children }) {
  const auth = useAuth();

  return (
    <>
      <h1>Auth Producer App</h1>
      <button onClick={auth.logout}>logout</button>
      <ul>
        <li>
          <NavLink to="new-collect">New Collect</NavLink>
        </li>
        <li>
          <NavLink to="my-collects">My Collects</NavLink>
        </li>
        <li>
          <NavLink to="profile">Profile</NavLink>
        </li>
      </ul>
      {children}
    </>
  );
}

export default Home;
