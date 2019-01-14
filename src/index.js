/**
 * Module dependencies
 */
import Service from './utils/service';
import App from './components/App';
import renderDOM from './utils/renderDom';
import { stateManager } from './utils/stateManager';
import { REQUEST_SUCCESS, REMOVE_APP_FROM_HOST } from './utils/stateManager/actions';
import Dom from './utils/dom';
/**
 * Import Styles
 */
import './styles/main.scss';

/**
 * Polyfill
 */
import '@babel/polyfill';

/**
 * Create new instance of Service
 */
const service = new Service();

/*
 * Call getData method from service
 * Dispatch REQUEST SUCCESS event to save data in stateManager
 * Render App into the DOM
 */
service.getData()
  .then((data) => {
    stateManager.dispatch(REQUEST_SUCCESS, { data });
    renderDOM(<App data={data} />, document.getElementById('root'));
  });

/**
 * Expose data API (stateManager)
 */
window.stateManager = stateManager;

