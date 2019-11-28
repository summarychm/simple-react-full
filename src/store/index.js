import { applyMiddleware, createStore } from '../Core/redux';
import reduxLogger from '../Core/redux-logger';
import reduxPromise from '../Core/redux-promise';
import reduxThunk from '../Core/redux-thunk';
import reducer from './reducers';

const store = createStore(reducer, applyMiddleware(reduxPromise, reduxThunk, reduxLogger));
export default store;
