import React from 'react';
import { AuthProvider } from './auth';
import { UserProvider } from './user';
import { ProducerProvider } from './producer';


function AppProviders({ children }) {
  return (
    <AuthProvider>
      <UserProvider>
        <ProducerProvider>{children}</ProducerProvider>
      </UserProvider>

    </AuthProvider>
  );
}
export default AppProviders;
