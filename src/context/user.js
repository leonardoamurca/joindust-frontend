import React from 'react';
import { useAuth } from './auth';
import { isProducer, isRecycler } from '../utils/constants';
import * as collectionsClient from '../services/collections-client';
import * as contactClient from '../services/contacts-client';

const UserContext = React.createContext();

function ProducerProvider({ value, ...rest }) {
  return <UserContext.Provider value={value} {...rest} />;
}

function RecyclerProvider({ value, ...rest }) {
  return <UserContext.Provider value={value} {...rest} />;
}

function UserProvider(props) {
  const {
    data: { user, collections },
  } = useAuth();

  const createCollect = form => collectionsClient.createCollect(form);

  const getCollectById = form => collectionsClient.getCollectById(form);

  const deleteCollectById = form => collectionsClient.deleteCollectById(form);

  const getCollectionsCreatedBy = form =>
    collectionsClient.getCollectionsCreatedBy(form);

  const getAllCollections = () => collectionsClient.getAllCollections();

  const getContacts = () => contactClient.getContacts();

  const deleteContactById = form => contactClient.deleteContactById(form);

  const createContact = form => contactClient.createContact(form);

  if (user && isProducer(user.roles[0].id)) {
    return (
      <ProducerProvider
        value={{
          user,
          collections,
          createCollect,
          getCollectById,
          deleteCollectById,
          getCollectionsCreatedBy,
        }}
        {...props}
      />
    );
  } else if (user && isRecycler(user.roles[0].id)) {
    return (
      <RecyclerProvider
        value={{
          user,
          getAllCollections,
          getContacts,
          deleteContactById,
          createContact,
        }}
        {...props}
      />
    );
  } else {
    return <UserContext.Provider value={user} {...props} />;
  }
}

function useUser() {
  const context = React.useContext(UserContext);
  if (context === undefined) {
    throw new Error(`useUser must be used within a UserProvider`);
  }
  return context;
}

export { UserProvider, useUser };
