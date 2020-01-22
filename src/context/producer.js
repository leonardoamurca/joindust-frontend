import React from 'react';
import { useAuth } from './auth';

const ProducerContext = React.createContext();

function ProducerProvider(props) {
  const {
    data: { user, collections },
  } = useAuth();

  return <ProducerContext.Provider value={{user, collections}} {...props} />;
}

function useProducer() {
  const context = React.useContext(ProducerContext);
  if (context === undefined) {
    throw new Error(`useProducer must be used within a ProducerProvider`);
  }
  return context;
}

export { ProducerProvider, useProducer };
