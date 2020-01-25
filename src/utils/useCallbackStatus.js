import React from 'react';

function useIsMounted() {
  const mounted = React.useRef(false);

  React.useLayoutEffect(() => {
    mounted.current = true;
    return () => (mounted.current = false);
  }, []);

  return mounted;
}

function useCallbackStatus() {
  const isMounted = useIsMounted();
  const [{ status, error, response }, setState] = React.useReducer(
    (s, a) => ({ ...s, ...a }),
    { status: 'rest', error: null, response: null }
  );

  const safeSetState = (...args) =>
    isMounted.current ? setState(...args) : null;

  const isPending = status === 'pending';
  const isRejected = status === 'rejected';
  const isSuccess = status === 'success';

  function run(promise) {
    if (!promise || !promise.then) {
      throw new Error(
        `The argument passed to useCallbackStatus().run must be a promise. Maybe a function that's passed isn't returning anything?`
      );
    }
    safeSetState({ status: 'pending' });

    return promise.then(
      response => {
        console.log(response);
        safeSetState({ status: 'success', response });
        return response;
      },
      error => {
        safeSetState({ status: 'rejected', error });
        return Promise.reject(error).catch(err => err);
      }
    );
  }

  return {
    isPending,
    isRejected,
    isSuccess,
    error,
    response,
    status,
    run,
  };
}

export default useCallbackStatus;
