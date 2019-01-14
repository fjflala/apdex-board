/**
 * Module dependencies
 */
const Dom = require('./index').default;
const Component = require('../component').default;

class App extends Component {
  render() {
    return (
      <ul className="bar__list">
        <li className="bar__item">Foo</li>
        <li className="bar__item">{false}</li>
      </ul>
    );
  }
};

describe('Dom util', () => {
  it('Should create a div element without attributes or children elements', () => {
    const element = Dom.createElement('div');
    expect(element).toBeInstanceOf(HTMLElement);
  });

  it('Should create a div element with class attribute', () => {
    const element = Dom.createElement('div', {className: 'foo'});
    expect(element).toBeInstanceOf(HTMLElement);
    expect(element.classList.contains('foo')).toBeTruthy();
  });

  it('Should create a div element with click event listener', () => {
    const element = Dom.createElement('div', {onClick: () => { return 'foo'}});
    expect(element).toBeInstanceOf(HTMLElement);
    expect(element.listeners.length).toBe(1);
  });

  it('Should create a div element with dataKey attribute', () => {
    const element = Dom.createElement('div', {'data-key': 'test'});
    expect(element).toBeInstanceOf(HTMLElement);
    expect(element.getAttribute('data-key')).toBe('test');
  });

  it('Should return an instance of App', () => {
    const element = Dom.createElement(App, null, null);
    expect(element).toBeInstanceOf(App);
  });

  it('Should return the same HTMLElement', () => {
    const element = Dom.createElement(document.createElement('div'), null, null);
    expect(element).toBeInstanceOf(HTMLElement);
  });
  
  it('Should append the children to the parent element', () => {

    const element = Dom.createElement(<div className="bar">
      <App />
    </div>, null, null);
    expect(element).toBeInstanceOf(HTMLElement);
  });
});