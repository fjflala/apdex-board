/**
 * Module dependencies
 */
import Service from './utils/service';
import App from './components/App';
import renderDOM from './utils/renderDom';

/**
 * Create new instance of Service
 */
const service = new Service();

/**
 * Create new instance of App
 */
const app = new App();

/**
 * Call getData method from service
 * Set the state of the app
 */
service.getData()
  .then((data) => {
    app.setState({data});

    renderDOM(app, document.querySelector('#root'));
  });