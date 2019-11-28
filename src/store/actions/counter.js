import * as types from '../action-type/counter';

export default {
  add(args) {
    return {
      type: types.ADD,
      ...args,
    };
  },
  thunkAdd(ms) {
    return (dispatch, getState) => {
      setTimeout(() => {
        console.log('thunkAdd', ms);
        dispatch({
          type: types.ADD,
        });
      }, ms || 100);
    };
  },
  minus() {
    return {
      type: types.MINUS,
    };
  },
};
