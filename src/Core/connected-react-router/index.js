import ConnectedRouter from './ConnectedRouter'; // Router组件
import routerMiddleware from './middleware'; // middleware
import connectRouter from './reducer'; // reducer
export { ConnectedRouter, routerMiddleware, connectRouter };
// actionCreators
export { push, replace, go, goBack, goForward, routerActions } from './actions';
