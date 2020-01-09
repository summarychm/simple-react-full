import { LOCATION_CHANGE } from './constants';

// connected的reducer函数接收history返回reducer
export default function createConnectRouter(history) {
  const initSate = { location: history.location, action: history.action };
  return (state = initSate, action) => {
    if (action.type === LOCATION_CHANGE) {
      return {
        location: action.payload.location,
        action: action.payload.action,
      };
    }
    return state;
  };
}
