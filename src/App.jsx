import React from 'react';
import { Provider } from './Core/react-redux';
import { HashRouter } from './Core/react-router-dom';

import store from './store';
import PageRouters from './routers';

export default function App(props) {
  return (
    <Provider store={store}>
      <HashRouter>
        <PageRouters />
      </HashRouter>
    </Provider>
  );
}
