import { applyMiddleware, createStore } from '@/redux';
import reduxPromise from '@/redux-promise';
import reduxThunk from '@/redux-thunk';
import reducer from './reducers';

const store = createStore(reducer, applyMiddleware(reduxPromise, reduxThunk));

export default store;
// import reduxLogger from '../Core/redux-logger';
// import { routerMiddleware } from '@/connected-react-router';
// import history from '../history';

// const store = createStore(reducer,
// applyMiddleware(routerMiddleware(history), reduxPromise, reduxThunk, reduxLogger))
