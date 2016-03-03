import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { syncHistoryWithStore } from 'react-router-redux';

import routes from './app/routes/routes';
import { Provider } from 'react-redux';
import { configureStore } from './app/store/configstore'


const store = configureStore(browserHistory, window.__initialState__)
const history = syncHistoryWithStore(browserHistory, store)

const app = document.getElementById('app');
ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes}></Router>
  </Provider>,
app);
