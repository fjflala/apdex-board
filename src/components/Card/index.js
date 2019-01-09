/**
 * Module dependencies
 */
import Component from '../../utils/component';
import List from '../List';

/**
 * Card component
 */
export default class Card extends Component {
  render() {
    const {
      hostName,
      className,
      data,
    } = this.props;

    return `<div class="ui-card ${className}">
      <h4 class="ui-card__title">${hostName}</h4>
      <div class="ui-card__content">
        ${new List({
          data
        }).render()}
      </div>
    </div>`;
  }
}