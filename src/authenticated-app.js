import React, { Suspense, lazy } from 'react';

import { useUser } from './context/user';
import { isProducer, isRecycler } from './utils/constants';
import FullPageSpinner from './components/FullPageSpinner';

const ProducerApp = lazy(() => import('./producer-app'));
const RecyclerApp = lazy(() => import('./recycler-app'));

function AuthenticatedApp() {
  const { user } = useUser();
  const roleId = user.roles[0].id;

  return (
    <Suspense fallback={<FullPageSpinner />}>
      {isProducer(roleId) && <ProducerApp roleId={roleId} />}
      {isRecycler(roleId) && <RecyclerApp roleId={roleId} />}
    </Suspense>
  );
}

export default AuthenticatedApp;
