export default ({ dispatch, getState }) => (next) => (action) => {
  console.log('redux-thunk');
  if (typeof action === 'function') return action(dispatch, getState);
  return next(action);
};
