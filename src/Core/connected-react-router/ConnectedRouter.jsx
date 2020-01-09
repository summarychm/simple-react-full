import React, { useEffect, useContext } from 'react';
import { Router } from 'react-router';
import { ReactReduxContext } from 'react-redux';
import { LOCATION_CHANGE } from './constants';

export default function ConnectedRouter(props) {
  const ctx = useContext(ReactReduxContext);
  useEffect(() => {
    const unListen = props.history.listen((location, action) => {
      ctx.store.dispatch({
        type: LOCATION_CHANGE,
        payload: {
          location,
          action,
        },
      });
    });
    return unListen;
  }, []);
  return <Router history={props.history}>{props.children}</Router>;
}
