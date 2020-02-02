import React from 'react';

function UnhandledError({ error }) {
  return (
    <div css={{ color: 'red' }}>
      <p>Uh oh... There's a problem. Try refreshing the app.</p>
      <pre>{error.message}</pre>
    </div>
  );
}

export default UnhandledError;
