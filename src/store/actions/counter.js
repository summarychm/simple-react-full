import * as types from '../action-type/counter';

export default {
  add(args) {
    return {
      type: types.ADD,
      ...args,
    };
  },
  minus(args) {
    return {
      type: types.MINUS,
      ...args,
    };
  },
};
