import compose from './compose';

// 分三次函数传递,方便取值,语义更明确(js过于灵活所致)
export default function applyMiddleware(...middlewares) {
  return (createStore) => (...args) => {
    // 根据rootReducer和preloadState构建store
    const store = createStore(...args);
    let dispatchFn = () => {
      throw new Error('dispatch正在构造中!');
    };
    // 提供给Middleware的工具对象
    // dispatch采用闭包的形式(懒执行),在调用时才获取增强后的dispatchFn
    const middlewareAPI = {
      getState: store.getState,
      dispatch: (...parmas) => dispatchFn(...parmas),
    };
    // 初始化中间件,解开middleware三层嵌套的第一层
    const chain = middlewares.map((middleware) => middleware(middlewareAPI));
    //! 增强dispatch(由右向左依次包装),解开middleware三层嵌套的第二层
    dispatchFn = compose(...chain)(store.dispatch);

    return { ...store, dispatch: dispatchFn };
  };
}
