import 'normalize.css';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

import createBrowserHistory from 'history/lib/createBrowserHistory';
import createRoutes from './route/createRoutes';
import configureStore from './store/configureStore';

const history = createBrowserHistory();
const routes = createRoutes();
const store = configureStore();

render((
  <div>
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>
    <DebugPanel top right bottom>
      <DevTools store={store} monitor={LogMonitor} />
    </DebugPanel>
  </div>
), document.getElementById('container'));
