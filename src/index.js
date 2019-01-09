/**
 * Module dependencies
 */
import Service from './utils/service';
import App from './components/App';
import renderDOM from './utils/renderDom';

/**
 * Import Styles
 */
import './styles/main.scss';

/**
 * Create new instance of Service
 */
const service = new Service();

/**
 * Create new instance of App
 */

/**
 * Call getData method from service
 * Set the state of the app
 */
service.getData()
  .then((data) => {
    const app = new App(null, {data});

    renderDOM(app, document.querySelector('#root'));
  });