import React from 'react';

import { Provider } from './Core/react-redux';
import { HashRouter as Router } from './Core/react-router-dom';

import store from './store';
import PageRouters from './routers';
import Counter from './Component/Counter';

export default function App(props) {
  // return <div>11</div>;
  return (
    <Provider store={store}>
      <Counter />
      {/* <Router>
        <PageRouters />
      </Router> */}
    </Provider>
  );
}
