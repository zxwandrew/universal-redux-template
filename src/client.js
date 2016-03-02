import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import routes from './app/routes/routes';

import { Provider } from 'react-redux';
import {store} from './app/store/store'

// import CoreLayout from "./layout/CoreLayout";
// import HomeView from "./pages/HomeView";



const app = document.getElementById('app');
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}></Router>
  </Provider>,
app);
