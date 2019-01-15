import {
  REQUEST_SUCCESS,
  REMOVE_APP_FROM_HOST,
  ADD_APP_TO_HOSTS,
  CHANGE_VIEW_TYPE,
} from './actions';

export default function reducer(state = {}, eventName, payload) {
  switch(eventName) {
    case REQUEST_SUCCESS:
      return payload;
    case REMOVE_APP_FROM_HOST:
      // Notation: O(n) 
      payload.hosts.forEach(hostName => {
        state.data[hostName] = state.data[hostName].filter(app => {
          return app.name !== payload.name;
        });
      });
      return state;
    case ADD_APP_TO_HOSTS:
      // Notation: O(n)
      payload.hosts.forEach((hostName) => {        
        state.data[hostName].push(payload.app);
        state.data[hostName] = state.data[hostName].sort((a, b) => b.apdex - a.apdex);
      });

      return state;
    case CHANGE_VIEW_TYPE:
      state.showList = payload.showList;
      return state;
    default:
      return state;
  }
}