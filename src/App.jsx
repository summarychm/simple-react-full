import React from 'react';
import { Provider } from './Core/react-redux';
import store from './store';

import Counter from './Component/Counter';

function App(props) {
  return (
    <Provider store={store}>
      <div>
        <p>Hello world!</p>
        <Counter />
      </div>
    </Provider>
  );
}
export default App;
