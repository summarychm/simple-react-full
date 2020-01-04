import compose from './compose';

/** 应用传入的中间件,增强dispatch,三层函数嵌套方便取值(柯里化,语义更明确).
 * (中间件)=>(createStore)=>(reducer,preloadState)
 * @param  {...any} middlewares 中间件集合
 */
export default function applyMiddleware(...middlewares) {
  return (createStore) => (...args) => {
    // 根据 reducer和preloadState 构建store
    const store = createStore(...args);
    let dispatchFn = () => console.error('dispatch正在构造中!');

    // 提供给Middleware的工具对象,
    const middlewareAPI = {
      getState: store.getState,
      // 采用空函数包装的形式,实现懒执行(在调用时获取最新的dispatchFn)
      dispatch: (...parmas) => dispatchFn(...parmas),
    };

    // 初始化中间件,解开middleware三层嵌套的第一层
    const chain = middlewares.map((middleware) => middleware(middlewareAPI));
    // 增强dispatch(由右向左依次嵌套),解开三层嵌套的第二层
    dispatchFn = compose(...chain)(store.dispatch);
    // 返回全新的redux对象,其dispatch替换为增强后的dispatch
    return { ...store, dispatch: dispatchFn };
  };
}
