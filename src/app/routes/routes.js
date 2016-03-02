import React from "react";
import {Router, Route, IndexRoute} from "react-router";

import CoreLayout from "../layouts/CoreLayout";
import HomeView from "../pages/HomeView";
import CounterPage from "../pages/CounterPage";

import { Provider } from 'react-redux';
import {store} from '../store/store'

module.exports = (
	<Router>
		<Route path="/" component={CoreLayout}>
      <IndexRoute component={HomeView}/>
      <Route path="/counter" component={CounterPage}/>
    </Route>
	</Router>
);



// const routes = {
//   path: '',
//   component: CoreLayout,
//   childRoutes: [
//     {
//       path: '/',
//       component: HomeView
//     },{
//       path: '/counter',
//       component: CounterPage
//     }
//   ]
// }
//
// export { routes };
