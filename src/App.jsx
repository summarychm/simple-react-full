import React from 'react';
import Counter from './Component/Counter';

import store from './store';
import types from './store/actions/counter';
window.store = store;

const { getState, subscribe, dispatch } = store;
function App() {
  const { number } = store.getState().counter;
  const add = () => {
    dispatch(types.add());
  };
  const minus = () => {
    dispatch(types.minus());
  };
  subscribe(() => {
    console.log('store.getState()', getState().counter.number);
  });
  return (
    <div>
      <p>Hello world!</p>
      <Counter number={number} add={add} minus={minus} />
    </div>
  );
}

export default App;
