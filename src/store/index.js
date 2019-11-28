import { createStore } from '../Core/Redux';
import reducer from './reducer/counter';
const store = createStore(reducer);
export default store;
