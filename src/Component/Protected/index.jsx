import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export default function Protected(props) {
  const { component: Component, path } = props;
  return (
    <Route
      path={path}
      render={(renderProps) =>
        localStorage.getItem('login') ? (
          <Component {...renderProps} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location.pathname } }} />
        )}
    />
  );
}
