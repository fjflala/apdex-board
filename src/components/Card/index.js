/**
 * Module dependencies
 */
import Dom from '../../utils/dom';
import Component from '../../utils/component';
import { stateManager } from '../..';
import { REMOVE_APP_FROM_HOST } from '../../utils/stateManager/actions';

/**
 * @typedef App
 * @property {string} name - Name of the app
 * @property {number} version - Version of the app
 * @property {number} apdex - Apdex of the app
 * @property {string} host - Host of the app
 */

/**
 * Card component
 */
export default class Card extends Component {
  /**
   * removeAppFromHost will dispatch an event 
   * @param {App} app 
   */
  removeAppFromHost(app) {
    const {
      name,
      version,
      apdex,
      host,
    } = app;

    if (confirm(`${name}:
      Version: ${version}
      Host: ${host}
      Apdex: ${apdex}.
      Do you want to remove this app?
    `)) {
      stateManager.dispatch(REMOVE_APP_FROM_HOST, {
        name,
        version,
        apdex,
        hostName: host,
      });
    }
  }

  render() {
    const {
      title,
      data,
    } = this.props;

    return (
      <div class={`ui-card ui-card--grid`}>
        <h4 class="ui-card__title">{title}</h4>
        <div class="ui-card__content">
          <ul class="ui-list">
            {data && data.slice(0, 25).map((app, key) => (
                <li
                  className="ui-list__item"
                  onClick={() => this.removeAppFromHost({...app, host: title})}
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