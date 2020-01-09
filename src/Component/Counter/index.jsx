import React from 'react';
import { connect } from 'react-redux';
import actions from '../../store/actions/counter';

function Counter(props) {
  const { number, add, minus, thunkAdd } = props;
  return (
    <div>
      <p>{number}</p>
      <button type="button" onClick={add}>
        Add
      </button>
      <button type="button" onClick={minus}>
        Minus
      </button>
      <button type="button" onClick={thunkAdd.bind(null, 1000)}>
        thunk-Add
      </button>
      <button type="submit" onClick={() => props.go('/User')}>
        GoUser
      </button>
    </div>
  );
}

const mapStateToProps = (state) => state.counter;
const mapDispatchToProps = actions;
// const mapDispatchToProps = (dispatch) => {
//   return {
//     add: () => {
//       dispatch(actions.add({ payload: 5 }));
//     },
//     minus: () => dispatch(actions.minus()),
//     thunkAdd: () => {
//       dispatch(actions.thunkAdd(1000));
//     },
//   };
// };
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
