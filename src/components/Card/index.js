/**
 * Module dependencies
 */
import Dom from '../../utils/dom';
import Component from '../../utils/component';

/**
 * Card component
 */
export default class Card extends Component {
  render() {
    const {
      title,
      data,
      onClickApp,
    } = this.props;

    return (
      <div class={`ui-card ui-card--grid`}>
        <h4 class="ui-card__title">{title}</h4>
        <div class="ui-card__content">
          <ul class="ui-list">
            {data && data.map((app, key) => (
                <li
                  className="ui-list__item"
                  onClick={() => onClickApp([title], app)}
                  data-apdex={app.apdex}
                >
                  {app.name}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    );
  }
}