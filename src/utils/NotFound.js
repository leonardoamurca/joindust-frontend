import React from 'react';
import { Link } from '@reach/router';

function NotFound({ path, screenName }) {
  return (
    <div
      css={{
        height: '100%',
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div>
        Sorry... nothing here. <Link to={path}>Go to {screenName}</Link>
      </div>
    </div>
  );
}

export default NotFound;
