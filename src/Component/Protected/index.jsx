import React from 'react';
import { Redirect, Route } from '@/react-router-dom';

export default function Protected(props) {
  const { component: Component, path } = props;
  const isLogin = !!localStorage.getItem('login');
  return (
    <Route
      path={path}
      render={(renderProps) =>
        isLogin ? (
          <Component {...renderProps} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: renderProps.location.pathname } }} />
        )
      }
    />
  );
}
