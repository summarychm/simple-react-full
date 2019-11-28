import { createStore } from '../Core/Redux';
import reducer from './reducers';
const store = createStore(reducer);
export default store;
