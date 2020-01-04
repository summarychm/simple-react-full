/** 合并子reducer集合为一个统一的reducerFn
 * @param {Object} reducers reducer对象
 */
export default function combineReducers(reducers) {
  // 返回合并reducers后的总reducer函数
  return function reducer(state = {}, action) {
    const nextState = {};
    let hashChanged = false; // state是否change,为其他组件提供性能优化的前置条件
    for (const [reducerKey, reducerFn] of Object.entries(reducers)) {
      const oldState = state[reducerKey];
      const newState = reducerFn(oldState, action);
      nextState[reducerKey] = newState;
      hashChanged = hashChanged || newState !== oldState;
    }
    return hashChanged ? nextState : state;
  };
}
