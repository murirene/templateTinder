import { applyMiddleware, createStore } from 'redux';
const reducers = require('../reducers');

import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

module.exports = function() {

  const logger = createLogger();
  const store = createStore(reducers,applyMiddleware(thunk, promise, logger))

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
