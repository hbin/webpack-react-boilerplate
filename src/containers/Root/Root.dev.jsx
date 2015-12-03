import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import DevTools from '../DevTools';

const Root = ({
  store,
  history,
  routes
}) => (
  <Provider store={store}>
    <div>
      <Router history={history} routes={routes} />
      <DevTools />
    </div>
  </Provider>
);

export default Root;
