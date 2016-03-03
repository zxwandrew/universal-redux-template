import React from "react";
import {Router, Route, IndexRoute} from "react-router";

import CoreLayout from "../layouts/CoreLayout";
import HomePage from "../pages/HomePage";
import CounterPage from "../pages/CounterPage";

module.exports = (

		<Route path="/" component={CoreLayout}>
      <IndexRoute component={HomePage}/>
      <Route path="/counter" component={CounterPage}/>
    </Route>

);
