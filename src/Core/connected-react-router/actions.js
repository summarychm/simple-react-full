import { CALL_HISTORY_METHOD } from './constants';

// actionCreator的包装方法,抽离公共代码
const updateLocation = (method) => {
  return (...args) => ({
    type: CALL_HISTORY_METHOD,
    payload: { method, args },
  });
};

export const push = updateLocation('push');
export const replace = updateLocation('replace');
export const go = updateLocation('go');
export const goBack = updateLocation('goBack');
export const goForward = updateLocation('goForward');

export const routerActions = { push, replace, go, goBack, goForward };
