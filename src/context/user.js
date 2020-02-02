import React, { useContext, createContext } from 'react';

import { useAuth } from './auth';
import { isProducer } from '../utils/constants';
import * as collectionsClient from '../services/collections-client';
import * as contactClient from '../services/contacts-client';

const UserContext = createContext();

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

  const producerProps = () => {
    return {
      collections,
      createCollect,
      getCollectById,
      deleteCollectById,
      getCollectionsCreatedBy,
    };
  };

  const recyclerProps = () => {
    return {
      getAllCollections,
      getContacts,
      deleteContactById,
      createContact,
    };
  };

  let userProps;
  if (user) {
    const roleId = user.roles[0].id;

    userProps = isProducer(roleId) ? producerProps() : recyclerProps();
  }

  return <UserContext.Provider value={{ user, ...userProps }} {...props} />;
}

function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error(`useUser must be used within a UserProvider`);
  }
  return context;
}

export { UserProvider, useUser };
