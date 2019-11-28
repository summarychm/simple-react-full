import React, { useState, useMemo, useEffect } from 'react';
import RouterContext from './context';
export default function HashRouter(props) {
  const [value, setValue] = useState(
    useMemo(() => {
      console.log('HashRouter -> setValue', window.location.hash);
      return { location: { pathname: window.location.hash.slice(1) } };
    }, []),
  );
  useEffect(() => {
    console.log('HashRouter -> useEffect', value);
    function hashChangeFn() {
      setValue(() => {
        return { location: { pathname: window.location.hash.slice(1) } };
      });
    }
    window.addEventListener('hashchange', hashChangeFn);
    return function clearHashChange() {
      console.log('HashRouter -> clearHashChange', value);
      window.removeEventListener('hashchange', hashChangeFn);
    };
  });

  const { children } = props;
  return (
    <RouterContext.Provider value={value}>{React.Children.only(children)}</RouterContext.Provider>
  );
}
