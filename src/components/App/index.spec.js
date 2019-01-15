/**
 * Module dependencies
 */
const Dom = require('../../utils/dom').default;
const App = require('./index').default;
const renderDom = require('../../utils/renderDom').default;
const {
  stateManager
} = require('../../utils/stateManager');
const {
  REQUEST_SUCCESS,
} = require('../../utils/stateManager/actions');

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

  it('Should dispatch a event when removeAppFromHosts is called', () => {
    stateManager.dispatch(REQUEST_SUCCESS, { data });
    global.confirm = () => true;

    const spy = jest.spyOn(App.prototype, 'setState');
    const target = document.createElement('div');

    renderDom(<App data={data} />, target);
    
    expect(() => { 
      App.prototype.removeAppFromHosts(null, data.fooHostname[0]);
    }).toThrowError();

    App.prototype.removeAppFromHosts(['fooHostname'], data.fooHostname[0]);

    expect(spy).toHaveBeenCalled();
  });

  it('Should dispatch a event when addAppToHosts is called', () => {
    stateManager.dispatch(REQUEST_SUCCESS, { data });

    const spy = jest.spyOn(App.prototype, 'setState');
    const target = document.createElement('div');

    renderDom(<App data={data} />, target);
    
    expect(() => { 
      App.prototype.addAppToHosts(null, data.fooHostname[0]);
    }).toThrowError();

    App.prototype.addAppToHosts(['fooHostname'], {name: 'Bar', apdex: 100});

    expect(spy).toHaveBeenCalled();
  });

  it('Should return an array when getTopAppsByHost is called', () => {
    stateManager.dispatch(REQUEST_SUCCESS, { data });

    const spy = jest.spyOn(App.prototype, 'setState');
    const target = document.createElement('div');

    renderDom(<App data={data} />, target);
    
    expect(() => { 
      App.prototype.getTopAppsByHost(null, 5);
    }).toThrowError();

    App.prototype.getTopAppsByHost('fooHostname', 5);

    expect(spy).toHaveBeenCalled();
  });

  it('Should dispatch a event when changeView method is called', () => {
    stateManager.dispatch(REQUEST_SUCCESS, { data });

    const target = document.createElement('div');

    renderDom(<App data={data} />, target);
    expect(stateManager.getState().showList).toBeFalsy();

    App.prototype.changeView = App.prototype.changeView.bind({state: {showList: false}});
    App.prototype.changeView();
    expect(stateManager.getState().showList).toBeTruthy();
  });
});
