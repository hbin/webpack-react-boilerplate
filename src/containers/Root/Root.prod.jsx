import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

const Root = ({
  store,
  history,
  routes
}) => (
  <Provider store={store}>
    <div>
      <Router history={history} routes={routes} />
    </div>
  </Provider>
);

export default Root;
