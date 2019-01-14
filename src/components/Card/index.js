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
      showList,
    } = this.props;

    return (
      <div class={`ui-card ${showList ? '' : 'ui-card--grid'}`}>
        <h4 class="ui-card__title">{title}</h4>
        <div class="ui-card__content">
          <ul class="ui-list">
            {data && data.map((app, key) => (
                <li
                  className="ui-list__item"
                  data-apdex={app.apdex}
                >
                  <button className="ui-list__button" onClick={() => onClickApp([title], app)}>
                    {app.name}
                  </button>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    );
  }
}