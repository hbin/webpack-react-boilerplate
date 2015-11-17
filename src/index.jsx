import 'normalize.css';

import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import TodoApp from './containers/TodoApp';

render(
  <Provider store={configureStore()}>
    <TodoApp />
  </Provider>,
  document.getElementById('container')
);
