export default ({ dispatch, getState }) => (next) => (action) => {
  console.log('redux-thunk');
  if (typeof action === 'function') {
    console.log('111');
    return action(dispatch, getState);
  }
  return next(action);
};
