import { createStore } from 'redux';
import rootReducer from '../reducers';

const configureStore = () => {
  const store = createStore(rootReducer);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};

export default configureStore;
