const isPromise = (obj) =>
  !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';

export default ({ getState, dispatch }) => (next) => (action) => {
  console.log('redux-promise');
  if (!isPromise(action.payload)) return next(action);

  return action.payload
    .then((result) => dispatch({ ...action, payload: result }))
    .catch((err) => {
      dispatch({ ...action, payload: err, error: true });
      return Promise.reject(err);
    });
};
