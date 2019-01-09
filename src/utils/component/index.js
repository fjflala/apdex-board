/**
 * Represents a component
 */

/**
 * @typedef Props
 * @type {object}
 * @property {function} children - instance of Component
 */
export default class Component {
  /**
   * Create a Component
   * @param {Props} props
   * @property {Props} props
   * @property {object} state
   */
  constructor(props, state) {
    this.state = state || {};
    this.props = props;
     
    if (!this.render && typeof this.render !== 'function') {
      throw new Error('A component must have a render function');
    }
  }

  /**
   * Set the newState into state's property of the class
   * @param {object} newState 
   */
  setState(newState) {
    if (newState && typeof newState !== 'object') {
      throw new Error('State param must be an Object');
    }

    if (!newState || this.state === newState) {
      return;
    }
    
    if (this.state !== newState) {
      this.render();
    }

    this.state = newState; 
  }
}