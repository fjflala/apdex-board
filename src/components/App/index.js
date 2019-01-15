/**
 * Module dependencies
 */
import Dom from '../../utils/dom';
import Component from '../../utils/component';
import Card from '../Card';
import { stateManager } from '../../utils/stateManager';
import {
  REMOVE_APP_FROM_HOST,
  ADD_APP_TO_HOSTS,
  CHANGE_VIEW_TYPE,
} from '../../utils/stateManager/actions';


/**
 * APP component
 */
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data || {},
      showList: false,
    };
  }

  componentDidMount() {
    stateManager.subscribe('app', (state) => {
      this.setState(state);
      this.forceUpdate();
      
      const showGridEl = document.getElementById('showList');
      if (showGridEl) {
        showGridEl.checked = state.showList;
      }
    });
  }
  
  /**
   * addAppToHosts method
   * @param {array} hosts 
   * @param {object} app 
   * @param {string} app.name
   * @param {number} app.version
   * @param {number} app.apdex
   */
  addAppToHosts(hosts, app) {
    if (!hosts && !Array.isArray(hosts)) {
      throw new Error('Hosts param must be an array');
    }

    stateManager.dispatch(ADD_APP_TO_HOSTS, {
      app,
      hosts,
    });
  }
  /**
   * removeAppFromHost will dispatch an event 
   * @param {array} hosts - array of the hosts name
   * @param {object} app 
   * @param {string} app.name
   * @param {number} app.version
   * @param {number} app.apdex
   */
  removeAppFromHosts(hosts, app) {
    if (!hosts && !Array.isArray(hosts)) {
      throw new Error('Hosts param must be an array');
    }

    const {
      name,
      version,
      apdex,
    } = app;

    if (confirm(`${name}:
      Version: ${version}
      Apdex: ${apdex}.
      Do you want to remove this app from ${hosts.join(', ')}?
    `)) {
      stateManager.dispatch(REMOVE_APP_FROM_HOST, {
        name,
        version,
        apdex,
        hosts,
      });
    }
  }

  /**
   * getTopAppsByHost method
   * @param {string} hostName - The host name
   * @param {number} limit - Limit number of apps to show
   * @param {number} offset - Offset could work as a paginator
   */
  getTopAppsByHost(hostName, limit = 25, offset = 0) {
    if (!hostName && typeof hostName !== 'string') {
      throw new Error('hostName param must be defined and it must be a string');
    }

    let data;

    if(this.state && this.state.data) {
      data = this.state.data;
    } else {
      data = stateManager.getState().data;
    }

    if (data[hostName]) {
      const topApsByHost = data[hostName].slice(offset, limit);
      return topApsByHost;
    }

    return [];
  }

  changeView() {
    stateManager.dispatch(CHANGE_VIEW_TYPE, { showList: !this.state.showList });
  }

  render() {
    const {
      data,
      showList,
    } = this.state;
  
    return (
      <main className="app">
        <header className="app__header">
          <h1 className="app__title">Apps by Host</h1>
          <span className="app__subtitle">for user averylongemailaddress@companyname.com</span>
          <label for="showList" className="app__label">
            <input
              className="app__input"
              type="checkbox" 
              id="showList"
              onChange={() => this.changeView()}
            />
            Show as list
          </label>
        </header>
        <div className="app__card-container">
        {data && Object.keys(data).map((hostName) => {
          const topApsByHost = this.getTopAppsByHost(hostName, 5, 0);
          return (
            <Card title={hostName} data={topApsByHost} onClickApp={this.removeAppFromHosts} showList={showList} />
          )
        })}
        </div>
      </main>
    );
  }
}