import Component from '../../utils/component';
import Card from '../Card';
import List from '../List';


export default class App extends Component {
  render() {
    const {
      data,
    } = this.state;

    return `<main class="app">
      ${Object.keys(data).map(key => (
        new Card({
          className: 'ui-card--grid',
          hostName: key,
          data: data[key],
        }).render())
      ).join('')}
    </main>`;
  }
}