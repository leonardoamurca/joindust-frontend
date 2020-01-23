import React from 'react';
import { useAuth } from './auth';
import * as collectionsClient from '../services/collections-client';

const ProducerContext = React.createContext();

function ProducerProvider(props) {
  const {
    data: { user, collections },
  } = useAuth();

  const createCollect = form => collectionsClient.createCollect(form);

  const getCollectById = form => collectionsClient.getCollectById(form);

  const deleteCollectById = form =>
    collectionsClient
      .deleteCollectById(form)
      .then(res => res)
      .catch(err => err);

  return (
    <ProducerContext.Provider
      value={{
        user,
        collections,
        createCollect,
        getCollectById,
        deleteCollectById,
      }}
      {...props}
    />
  );
}

function useProducer() {
  const context = React.useContext(ProducerContext);
  if (context === undefined) {
    throw new Error(`useProducer must be used within a ProducerProvider`);
  }
  return context;
}

export { ProducerProvider, useProducer };
