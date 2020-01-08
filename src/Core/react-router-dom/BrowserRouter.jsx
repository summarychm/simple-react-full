import React, { useState, useEffect } from 'react';
import ReactRouterContext from './context';

export default function BrowserRouter(props) {
  const [currentState, setCurrentState] = useState({ location: { pathname: '/' } });
  const globalHistory = window.history;
  const history = {
    location: currentState.location,
    push(to) {
      if (history.promptFn) {
        const allrow = window.confirm(history.promptFn(currentState.location));
        if (!allrow) return;
      }
      if (typeof to === 'object') {
        const { pathname, state } = to;
        globalHistory.pushState(state, null, pathname);
      } else globalHistory.pushState(null, null, to);
    },
    block(promptFn) {
      history.promptFn = promptFn;
    },
    unblock() {
      history.promptFn = null;
    },
  };
  const routerValue = {
    location: currentState.location,
    history,
  };

  useEffect(() => {
    /* eslint-disable */
    // !重写history.pushState方法,用于触发push事件
    !(function mock(history) {
      const pushState = history.pushState; // 缓存原始pushState方法
      history.pushState = function(state, title, url) {
        // 调用自定义pushState方法
        if (typeof window.onpushstate === 'function') window.onpushstate(state, url);
        return pushState.apply(history, arguments);
      };
    })(window.history);

    window.onpushstate = (state, pathname) => {
      setCurrentState({
        location: {
          ...currentState.location,
          pathname,
          state,
        },
      });
    };
    window.onpopstate = (event) => {
      setCurrentState({
        location: {
          ...currentState.location,
          pathname: window.location.pathname,
          state: event.state,
        },
      });
    };
  }, []);

  return (
    <ReactRouterContext.Provider value={routerValue}>{props.children}</ReactRouterContext.Provider>
  );
}
