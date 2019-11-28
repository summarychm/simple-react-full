import React from 'react';
import { connect } from './Core/react-redux';

import Counter from './Component/Counter';
import actions from './store/actions/counter';

function App(props) {
  const { number, add, minus, thunkAdd } = props;
  return (
    <div>
      <p>Hello world!</p>
      <Counter
        number={number}
        add={() => {
          add({ payload: 5 });
        }}
        minus={minus}
        thunkAdd={() => thunkAdd(1000)}
      />
    </div>
  );
}
const mapStateToProps = (state) => state.counter;
const mapDispatchToProps = actions;
export default connect(mapStateToProps, mapDispatchToProps)(App);
