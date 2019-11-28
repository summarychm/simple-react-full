import { applyMiddleware, createStore } from '../Core/redux';
import reduxLogger from '../Core/redux-logger';
import reducer from './reducers';

const store = createStore(reducer, applyMiddleware(reduxLogger));
export default store;
