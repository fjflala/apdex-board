/**
 * Module dependencies
 */
const StateManager = require('./index').default;
const {
  REQUEST_SUCCESS,
  REMOVE_APP_FROM_HOST,
} = require('./actions');

describe('StateManager util', () => {
  it('Should create a new instance of StateManger', () => {
    const stateManager = new StateManager();
    expect(stateManager).toBeInstanceOf(StateManager);
  });

  it('Should return the state when calling getState method', () => {
    const stateManager = new StateManager();
    expect(stateManager).toBeInstanceOf(StateManager);
    expect(stateManager.getState()).toEqual({});
  });

  it('Should push a new listener when subscribe method is used', () => {
    const stateManager = new StateManager();
    expect(stateManager).toBeInstanceOf(StateManager);
    
    stateManager.subscribe('test', (state) => {
      return state;
    });

    expect(stateManager.listeners).toHaveLength(1);
  });

  it('Should throw Error when id/callback params are not sent', () => {
    const stateManager = new StateManager();
    expect(stateManager).toBeInstanceOf(StateManager);
    
    expect(() => {
      stateManager.subscribe();
    }).toThrowError();
  });

  it('Should throw Error if callback param in subscribe is not a function', () => {
    const stateManager = new StateManager();
    expect(stateManager).toBeInstanceOf(StateManager);
    
    expect(() => {
      stateManager.subscribe('test', 'not_a_function');
    }).toThrowError();
  });

  it('Should dispatch an event & subscriber should be called', () => {
    const stateManager = new StateManager();
    expect(stateManager).toBeInstanceOf(StateManager);
    const callback = jest.fn();
    stateManager.subscribe('test', callback);
    
    stateManager.dispatch(REQUEST_SUCCESS, { foo: 'bar' });
    expect(callback).toHaveBeenCalled();
  });

  it('Should dispatch REMOVE_APP_FROM_HOST event & subscriber should be called', () => {
    const stateManager = new StateManager({
      data: {
        bar: [
          {
            name: 'foo',
          },
        ],
      },
    });

    expect(stateManager).toBeInstanceOf(StateManager);
    const callback = jest.fn();
    stateManager.subscribe('test', callback);
    
    stateManager.dispatch(REMOVE_APP_FROM_HOST, { hosts: ['bar'], name: 'foo' });
    expect(callback).toHaveBeenCalled();
    expect(stateManager.getState().data.bar).toHaveLength(0);
  });

  it('Should dispatch default event & subscriber should be called', () => {
    const stateManager = new StateManager();

    expect(stateManager).toBeInstanceOf(StateManager);
    const callback = jest.fn();
    stateManager.subscribe('test', callback);
    
    stateManager.dispatch('testEvent', {});
    expect(callback).toHaveBeenCalled();
  });
});