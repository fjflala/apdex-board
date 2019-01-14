/**
 * Module dependencies
 */
import axios from 'axios';
import sortByApdex from '../sortByApdex';
import mapAppsByHost from '../mapAppsByHost';

/**
 * Represents a service
 */
export default class Service {
  /**
   * Create a service
   * @param {object} opts - The config for the service
   */
  constructor(opts = {}) {
    this.url = opts.url || './host-app-data.json';
    this.restclient = axios.create({
      baseURL: this.url,
      headers: {
        'content-encoding': 'gzip',
      },
    });
  }
  /**
   * Get the data from the JSON
   * Transform the data from an array into an object
   * @param {string} path - The path
   * @returns {Promise} - The response of the http request
   */
  getData(path = '') {
    return this.restclient.get(path)
      .then(response => response.data)
      .then(sortByApdex)
      .then(mapAppsByHost);
  }
}