import Component from '../../utils/component';
import Card from '../Card';
import List from '../List';


export default class App extends Component {
  render() {
    const {
      data,
    } = this.state;
    return `<main>
      ${Object.keys(data).map(key => (
        new Card({
          children: new List({
            hostName: key,
            data: data[key],
          }),
        }).render())
      ).join('')}
    </main>`;
  }
}