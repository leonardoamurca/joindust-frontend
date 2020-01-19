import React from 'react';
import { useUser } from './context/user';
import { isProducer, isRecycler } from './utils/constants';
import FullPageSpinner from './components/FullPageSpinner';

const ProducerApp = React.lazy(() => import('./producer-app'));
const RecyclerApp = React.lazy(() => import('./recycler-app'));

function AuthenticatedApp() {
  const user = useUser();
  const roleId = user.roles[0].id;

  return (
    <React.Suspense fallback={<FullPageSpinner />}>
      {isProducer(roleId) && <ProducerApp roleId={roleId} />}
      {isRecycler(roleId) && <RecyclerApp roleId={roleId} />}
    </React.Suspense>
  );
}

export default AuthenticatedApp;
