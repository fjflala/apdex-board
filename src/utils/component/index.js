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
  constructor(props) {
    this.state = {};
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
    if (!newState || this.state === newState) {
      return;
    }

    if (newState && typeof newState !== 'object') {
      throw new Error('State param must be an Object');
    }

    this.state = newState;
    this.render(); 
  }
}