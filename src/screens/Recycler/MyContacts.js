import React from 'react';
import { useUser } from '../../context/user';

function MyContacts() {
  const user = useUser();

  return <h1>My Contacts</h1>;
}

export default MyContacts;
