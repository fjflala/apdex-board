/**
 * Module dependencies
 */
import Dom from '../../utils/dom';
import Component from '../../utils/component';
import Card from '../Card';
import { stateManager } from '../../utils/stateManager';

/**
 * APP component
 */
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data || {},
    };
  }

  componentDidMount() {
    stateManager.subscribe('app', (state) => {
      this.setState(state);
      this.forceUpdate();
    });
  }

  render() {
    const {
      data,
    } = this.state;
  
    return (
      <main className="app">
        {data && Object.keys(data).map(hostName => {
          return (
            <Card title={hostName} data={data[hostName]} />
          )
        })}
      </main>
    );
  }
}