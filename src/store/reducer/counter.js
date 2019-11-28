import * as types from '../action-type/counter';
const initState = { number: 1 };
export default (state = initState, action) => {
  console.log(action);

  switch (action.type) {
    case types.ADD:
      return { number: state.number + (action.payload || 1) };
    case types.MINUS:
      return { number: state.number - (action.payload || 1) };
    default:
      return state;
  }
};
