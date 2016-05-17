/* Application Entry point. Injects the Store and loads the Route. */

import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores';
import App from './views/App';
import TemplateAppContainer from './containers/TemplateApp';

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={TemplateAppContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
