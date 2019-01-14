import renderDom from "../renderDom";

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
    
    if (props && props.render && typeof props.render === 'function') {
      this.render = props.render;
    }

    if (!this.render && typeof this.render !== 'function') {
      throw new Error('Component must have a render function');
    } else {
      Component.render(this);
      this.componentDidMount();
    }
  }

  /**
   * Render method public.
   * @param {*} _this 
   */
  static render(_this) {
    _this.componentWillMount();
    return _this.render();
  }

  /**
   * Set the newState into state's property of the class
   * @param {object} newState 
   */
  setState(newState) {
    this.state = newState;
  }

  /**
   * Will execute before Mount
   */
  componentWillMount() {
    return null;
  }

  /**
   * Will execute after Mount
   */
  componentDidMount() {
    return null;
  }

  /**
   * Use to update the component view.
   */
  forceUpdate() {
    renderDom();
  }
}