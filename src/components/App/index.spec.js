/**
 * Module dependencies
 */
const Dom = require('../../utils/dom').default;
const App = require('./index').default;
const renderDom = require('../../utils/renderDom').default;
const {
  stateManager
} = require('../../utils/stateManager');

const data = {
  'fooHostname': [
    {
      name: 'fooApp',
    },
  ],
  'barHostname': [
    {
      name: 'barApp',
    },
  ],
};

describe('App component', () => {
  it('Should render app', () => {
    const target = document.createElement('div');
    renderDom(<App data={data} />, target);
    expect(target.children[0].classList).toContain('app');
  });

  it('Should set state when subscriber callback is called', () => {
    const target = document.createElement('div');
    const spy = jest.spyOn(App.prototype, 'setState');
    renderDom(<App data={data} />, target);
    expect(target.children[0].classList).toContain('app');

    stateManager.dispatch('test', {});

    expect(spy).toHaveBeenCalled();
  });
});
