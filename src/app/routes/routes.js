import React from "react";
import {Route, IndexRoute} from "react-router";

import CoreLayout from "../layouts/CoreLayout";
import HomePage from "../pages/HomePage";
import CounterPage from "../pages/CounterPage";
import MapPage from "../pages/MapPage";

module.exports = (
  <Route path='/' component={CoreLayout}>
    <IndexRoute component={HomePage}/>
    <Route path='/counter' component={CounterPage}/>
    <Route path='/map' component={MapPage}/>
  </Route>
);
