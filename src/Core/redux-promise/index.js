function isPromise(obj) {
  return (
    !!obj &&
    (typeof obj === 'object' || typeof obj === 'function') &&
    typeof obj.then === 'function'
  );
}
export default ({ getState, dispatch }) => (next) => (action) => {
  if (isPromise(action.payload)) {
    return action.payload
      .then((result) => {
        console.log('redux-promise');
        return dispatch({ ...action, payload: result });
      })
      .catch((err) => {
        dispatch({ ...action, payload: err, error: true });
        return Promise.reject(err);
      });
  }
  return next(action);
};
