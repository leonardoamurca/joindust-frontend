import React, { Suspense, lazy } from 'react';
import { useUser } from './context/user';
import FullPageSpinner from './components/FullPageSpinner';

const AuthenticatedApp = lazy(() => import('./authenticated-app'));
const UnauthenticatedApp = lazy(() => import('./unauthenticated-app'));

function App() {
  const { user } = useUser();

  return (
    <Suspense fallback={<FullPageSpinner />}>
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </Suspense>
  );
}

export default App;
