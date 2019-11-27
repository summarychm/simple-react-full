const initReduxType = Symbol.for('REDUX.INIT');
export default function createStore(reducer, preloadedState, enhancer) {
  if (typeof reducer !== 'function') throw new Error('reducer必须是一个function!');
  // 兼容未传递preloadedState而传递enhancer的情况
  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }
  // 传递enhancer的情况
  if (enhancer) return enhancer(createStore)(reducer, preloadedState);

  let currentState = preloadedState;
  const currentListeners = [];

  function getState() {
    return currentState;
  }

  function subscribe(listener) {
    let isSubscribed = true;
    currentListeners.push(listener);
    // 取消监听方法
    return function unSubscribe() {
      if (!isSubscribed) return;
      isSubscribed = false;
      const idx = currentListeners.indexOf(listener);
      currentListeners.splice(idx, 1); // 不使用filter,避免数组整体遍历
    };
  }
  function dispatch(action) {
    currentState = reducer(currentState, action);
    // 批量派发监听
    currentListeners.forEach((listener) => listener());
    return action;
  }
  dispatch({ type: initReduxType }); // 自身先初始化
  return {
    getState,
    subscribe,
    dispatch,
  };
}
