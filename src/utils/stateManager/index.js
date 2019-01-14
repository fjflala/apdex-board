import reducer from './reducer';

export default class StateManager {
  constructor(initialState = {}) {
    this.listeners = [];
    this.state = initialState;
  }

  dispatch(eventName, payload) {
		this.state = reducer(this.state, eventName, payload);
    for (let i in this.listeners) {
      if (typeof this.listeners[i].callback === 'function') {
        this.listeners[i].callback(this.state, eventName);
      }
    }
  }

  subscribe(id, callback) {
    if (!callback || !id) {
      throw new Error('Please specify the listener and the ID');
    }

    if (typeof callback !== 'function') {
      throw new Error('Listener must be a function');
    }

    if (!this.listeners.some(l => l.id === id)) {
      this.listeners.push({id, callback});
    }
  }

  getState() {
    return this.state;
  }
}