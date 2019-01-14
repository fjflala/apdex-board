/**
 * Module dependencies
 */
jest.mock('../sortByApdex');
jest.mock('../mapAppsByHost');
const sortByApdex = require('../sortByApdex').default;
const mapAppsByHost = require('../mapAppsByHost').default;
const Service = require('./index').default;

describe('Service util', () => {
  it('Should create a new instance of Service', () => {
    const service = new Service();
    expect(service).toBeInstanceOf(Service);
    expect(service.url).toBe('./host-app-data.json'); // By default;
  });

  it('Should create a new instance of Service', () => {
    const service = new Service();
    expect(service).toBeInstanceOf(Service);
    service.getData();
    expect(sortByApdex).toHaveBeenCalled();
    expect(mapAppsByHost).toHaveBeenCalled();
  });
});
