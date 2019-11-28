import { applyMiddleware, createStore } from '../Core/Redux';
import reduxLogger from '../Core/redux-logger';
import reducer from './reducers';

const store = createStore(reducer, applyMiddleware(reduxLogger));
export default store;
