export default function combineReducers(reducers) {
  // 返回合并reducers后的reducer函数
  return function reducer(state = {}, action) {
    const nextState = {};
    // 使用该变量实现缓存效果,为其他组件提供性能优化的前置条件
    let hashChanged = false;
    for (const [reducerKey, reducerFn] of Object.entries(reducers)) {
      const oldState = state[reducerKey];
      const newState = reducerFn(oldState, action);
      nextState[reducerKey] = newState;
      // 更新hashChanged状态
      hashChanged = hashChanged || newState !== oldState;
    }
    return hashChanged ? nextState : state;
  };
}
