import { CALL_HISTORY_METHOD } from './constants';

// connected的中间件,拦截通过connected库派发的action,调用history上对应的方法更改location.
const routerMiddleware = (history) => (store) => (next) => (action) => {
  // 非用户通过connected库派发的action,则交由其他中间件处理.
  if (action.type !== CALL_HISTORY_METHOD) return next(action);
  // 反之则调用history库上对应的方法更改location.
  const {
    payload: { method, args },
  } = action;
  history[method](...args);
};
export default routerMiddleware;
