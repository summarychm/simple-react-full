export default function reduxLogger({ getState }) {
  // 这层函数包裹是为了将增强前的dispatch传递进来
  return function decorate(next) {
    // 接收action,返回的是当前中间增强后的dispatch方法
    return function newDispatch(action) {
      console.log('redux-logger');
      console.log('老状态', getState());
      next(action);
      console.log('新状态', getState());
    };
  };
}
