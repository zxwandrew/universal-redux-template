import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { syncHistoryWithStore } from 'react-router-redux';

import routes from './app/routes/routes';


import { Provider } from 'react-redux';
import { configureStore, DevTools } from './app/store/configstore'
// import {store} from './app/store/store'


// import CoreLayout from "./layout/CoreLayout";
// import HomeView from "./pages/HomeView";

const store = configureStore(browserHistory, window.__initialState__)
const history = syncHistoryWithStore(browserHistory, store)

const app = document.getElementById('app');
ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes}></Router>
  </Provider>,
app);
