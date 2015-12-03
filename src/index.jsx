import 'normalize.css';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import createBrowserHistory from 'history/lib/createBrowserHistory';
import createRoutes from './route/createRoutes';
import configureStore from './store/configureStore';

const history = createBrowserHistory();
const routes = createRoutes();

render((
  <Provider store={configureStore()}>
    <Router history={history} routes={routes} />
  </Provider>
), document.getElementById('container'));
