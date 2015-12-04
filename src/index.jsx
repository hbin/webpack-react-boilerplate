import 'normalize.css';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import createBrowserHistory from 'history/lib/createBrowserHistory';
import createRoutes from './routes';
import configureStore from './store';

let reduxTools = null;
if (__DEVTOOLS__) {
  const DevTools = require('./containers/DevTools');
  reduxTools = (
    <DevTools />
  )
}

const history = createBrowserHistory();
const routes = createRoutes();
const store = configureStore();

render(
  <Provider store={store}>
    <div>
      <Router history={history} routes={routes} />
      {reduxTools}
    </div>
  </Provider>,
  document.getElementById('container')
);
