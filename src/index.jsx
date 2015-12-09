import 'normalize.css';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import createBrowserHistory from 'history/lib/createBrowserHistory';
import createRoutes from './routes';
import configureStore from './store';

// There is side-effect here, the redux-devtools will always be
// compiled in the bundle files.
import DevTools from './components/DevTools';

const history = createBrowserHistory();
const routes = createRoutes();
const store = configureStore();

render(
  <Provider store={store}>
    <div>
      <Router history={history} routes={routes} />
      { __DEVTOOLS__ && <DevTools /> }
    </div>
  </Provider>,
  document.getElementById('container')
);
