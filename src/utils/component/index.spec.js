/**
 * Module dependencies
 */
jest.mock('../renderDom');
const renderDom = require('../renderDom').default;
const Component = require('./index').default;

describe('Component class', () => {
  it('Should create a new instance of Component', () => {
    const app = new Component({ render: () => {return;} });
    expect(app).toBeInstanceOf(Component);
  });

  it('Should throw a new Error if class doesn\'t have a render function', () => {
    expect(() => {
      new Component();
    }).toThrowError();
  });

  it('Should set a new State, when setState method is called', () => {
    const app = new Component({ render: () => {return;} });
    app.setState({foo: 'bar'});
    expect(app.state).toEqual({foo: 'bar'});
  });
  
  it('Should update the component when forceUpdate method is called', () => {
    const app = new Component({ render: () => {return;} });
    app.forceUpdate();
    expect(renderDom).toHaveBeenCalled();
  });
});
