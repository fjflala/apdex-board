import { REQUEST_SUCCESS, REMOVE_APP_FROM_HOST } from './actions';

export default function reducer(state = {}, eventName, payload) {
  switch(eventName) {
    case REQUEST_SUCCESS:
      return payload;
    case REMOVE_APP_FROM_HOST:
      state.data[payload.hostName] = state.data[payload.hostName].filter(app => {
        return app.name !== payload.name;
      });
      return state;
    default:
      return state;
  }
}