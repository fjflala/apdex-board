/**
 * Module dependencies
 */
const Dom = require('../dom').default;
const renderDom = require('./index').default;
const Component = require('../component').default;

class App extends Component {
  render() {
    return (
      <div>Foo</div>
    );
  }
}

describe('renderDom util', () => {
  it('Should throw Error if params are undefined', () => {
    expect(() => {
      renderDom();
    }).toThrowError();
  });

  it('Should append main component on target', () => {
    const target = document.createElement('div');
    renderDom(<App />, target);
    expect(target.children.length).toBe(1);
  });
});
