/**
 * Module dependencies
 */
import reducer from './reducer';

/**
 * StateManager, a little implementation of redux
 */
export default class StateManager {
  constructor(initialState = {}) {
    this.listeners = [];
    this.state = initialState;
  }
  /**
   * dispatch method
   * @param {string} eventName - Name of the event 
   * @param {object} payload - Data of the event
   */
  dispatch(eventName, payload) {
		this.state = reducer(this.state, eventName, payload);
    for (let i in this.listeners) {
      if (typeof this.listeners[i].callback === 'function') {
        this.listeners[i].callback(this.state, eventName);
      }
    }
  }
  /**
   * subscribe method
   * @param {any} id 
   * @param {function} callback 
   */
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
  
  /**
   * getState method
   * @returns {object} - the state
   */
  getState() {
    return this.state;
  }
}