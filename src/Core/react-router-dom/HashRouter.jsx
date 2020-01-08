import React, { useState, useEffect } from 'react';
import RouterContext from './context';
// const locationState = null;

export default function HashRouter({ children }) {
  // push是异步所以使用state缓存结果
  const [locationState, setLocationState] = useState();
  const [blockMsg, setBlockMsg] = useState();
  const [routerState, setRouterState] = useState(() => {
    console.log('HashRouter -> routerState init', window.location.hash);
    const data = {
      history: {
        push(to) {
          console.log('HashRouter push');
          if (blockMsg) {
            const allow = window.confirm(blockMsg(locationState.location));
            if (!allow) return;
          }
          if (typeof to === 'string') window.location.hash = to;
          else {
            setLocationState(() => to.state);
            window.location.hash = to.pathname;
          }
        },
        block(prompt) {
          console.log('block');
          setBlockMsg(() => prompt);
        },
        unblock() {
          console.log('unblock');
          setBlockMsg(null);
        },
      },
      location: { pathname: window.location.hash.slice(1) },
    };
    return data;
  });
  useEffect(() => {
    console.log('HashRouter -> useEffect', routerState);
    function hashChangeFn() {
      const location = {
        ...routerState.location,
        pathname: window.location.hash.slice(1) || '/',
        state: locationState,
      };
      const history = {
        ...routerState.history,
        location,

        // createHref(params) {
        //   return params;
        // },
      };
      setRouterState(() => ({
        ...routerState,
        location,
        history,
      }));
    }
    window.addEventListener('hashchange', hashChangeFn);
    window.location.hash = window.location.hash || '/'; // 初始化hash

    return function clearHashChange() {
      console.log('HashRouter -> clearHashChange', routerState);
      window.removeEventListener('hashchange', hashChangeFn);
    };
  }, []);

  return <RouterContext.Provider value={routerState}>{children}</RouterContext.Provider>;
}
