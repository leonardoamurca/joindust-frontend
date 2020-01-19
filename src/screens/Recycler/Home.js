import React from 'react';
import { useAuth } from '../../context/auth';
import NavLink from '../../components/NavLink';

function Home({ children }) {
  const auth = useAuth();

  return (
    <>
      <h1>Auth Recycler App</h1>
      <button onClick={auth.logout}>logout</button>
      <ul>
        <li>
          <NavLink to="all-collects">All Collects</NavLink>
        </li>
        <li>
          <NavLink to="my-contacts">My Contacts</NavLink>
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
