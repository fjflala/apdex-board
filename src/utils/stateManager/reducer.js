import {
  REQUEST_SUCCESS,
  REMOVE_APP_FROM_HOST,
  ADD_APP_TO_HOSTS,
} from './actions';

export default function reducer(state = {}, eventName, payload) {
  switch(eventName) {
    case REQUEST_SUCCESS:
      return payload;
    case REMOVE_APP_FROM_HOST:
      payload.hosts.forEach(hostName => {
        state.data[hostName] = state.data[hostName].filter(app => {
          return app.name !== payload.name;
        });
      });
      return state;
    case ADD_APP_TO_HOSTS:
      payload.hosts.forEach((hostName) => {        
        state.data[hostName].push(payload.app);
        state.data[hostName] = state.data[hostName].sort((a, b) => b.apdex - a.apdex);
      });

      return state;
    default:
      return state;
  }
}