import 'normalize.css';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import createBrowserHistory from 'history/lib/createBrowserHistory';
import createRoutes from './routes';
import configureStore from './store';

import Root from './containers/Root';

const history = createBrowserHistory();
const routes = createRoutes();
const store = configureStore();

render(
  <Root store={store} history={history} routes={routes} />,
  document.getElementById('container')
);
