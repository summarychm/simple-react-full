import { push } from '@/connected-react-router';
import * as types from '../action-type/counter';

export default {
  add(args) {
    return {
      type: types.ADD,
      payload: args.payload || 1,
    };
  },
  thunkAdd(ms) {
    return (dispatch, getState) => {
      setTimeout(() => {
        console.log('thunkAdd', ms);
        dispatch({
          type: types.ADD,
        });
      }, ms || 1000);
    };
  },
  minus() {
    return {
      type: types.MINUS,
    };
  },
  go(path) {
    return push(path);
  },
};
