/**
 * Module dependencies
 */
jest.mock('../../utils/stateManager', () => {
  return {
    stateManager: {
      dispatch: jest.fn(),
    },
  };
});

const Dom = require('../../utils/dom').default;
const Card = require('./index').default;
const renderDom = require('../../utils/renderDom').default;

const data = [
  {
    name: 'foo',
    version: 1,
    apdex: 85,
  },
  {
    name: 'bar',
    version: 5,
    apdex: 99,
  },
];

describe('Card component', () => {
  it('Should render a card', () => {
    const target = document.createElement('div');
    renderDom(<Card title="foo.host.com" data={data} />, target);
    expect(target.children[0].classList).toContain('ui-card');
  });

  it('Should dispatch a event when removeAppFromHost is called', () => {
    global.confirm = () => true;

    const target = document.createElement('div');
    renderDom(<Card title="foo.host.com" data={data} />, target);
    expect(target.children[0].classList).toContain('ui-card');

    Card.prototype.removeAppFromHost(data[0]);
  });
});
