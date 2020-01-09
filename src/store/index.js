import { applyMiddleware, createStore } from '@/redux';
// import reduxLogger from '../Core/redux-logger';
import reduxPromise from '@/redux-promise';
import reduxThunk from '@/redux-thunk';
import { routerMiddleware } from '@/connected-react-router';

import reducer from './reducers';

import history from '../history';

const store = createStore(
  reducer,
  applyMiddleware(routerMiddleware(history), reduxPromise, reduxThunk),
);
// const store = createStore(reducer, applyMiddleware(reduxPromise, reduxThunk, reduxLogger));
export default store;
