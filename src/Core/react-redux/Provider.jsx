import React from 'react';
import { ReactReduxContext } from './context';

export default function({ store, children }) {
  if (!store) throw new Error('<Provider>组件内必须接收store属性!');

  return (
    <ReactReduxContext.Provider value={store}>
      {children && React.Children.only(children)}
    </ReactReduxContext.Provider>
  );
}
