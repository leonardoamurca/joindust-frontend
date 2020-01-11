import React from 'react';
import { useAuth } from './auth';
import axios from 'axios';

const UserContext = React.createContext();

function UserProvider(props) {
  const {
    data: { user },
  } = useAuth();

  return <UserContext.Provider value={user} {...props} />;
}

function useUser() {
  const context = React.useContext(UserContext);
  if (context === undefined) {
    throw new Error(`useUser must be used within a UserProvider`);
  }
  return context;
}

export { UserProvider, useUser };
