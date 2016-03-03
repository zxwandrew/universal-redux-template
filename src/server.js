import babelPolyfill from "babel-polyfill";
import koa from "koa";
import React from "react";
import ReactDOM from "react-dom/server";
import { match, RouterContext, createMemoryHistory } from 'react-router';
import koaStatic from "koa-static";
import {syncHistoryWithStore} from 'react-router-redux'
import KoaReactView from "koa-react-view";
import register from "babel-core/register";
import { Provider } from 'react-redux';
// import path from "path";
// import  favicon from 'koa-favicon';

import routesContainer from "./app/routes/routes";
import {configureStore} from './app/store/configstore'

try {
  const app      = koa();
  const hostname = process.env.HOSTNAME || "localhost";
  const port     = process.env.PORT || 8000;
  const debug = process.env.NODE_ENV !== "production";
  let routes = routesContainer;

  app.use(koaStatic("dist"));
  let viewpath = 'dist/views';
  KoaReactView(app, {views: viewpath})
  register({
    only: [
      viewpath
    ]
  });
  // app.use(favicon('public/favicon.ico'));


  app.use(function *(next) {
    yield ((callback) => {
      const location  = this.url;

      const memoryHistory = createMemoryHistory(location);
      const store = configureStore(memoryHistory)
      const history = syncHistoryWithStore(memoryHistory, store)


    	match({history, routes, location}, (error, redirectLocation, renderProps) => {
        if (redirectLocation) {
          this.redirect(redirectLocation.pathname + redirectLocation.search, "/");
          return;
        }
        if (error || !renderProps) {
          console.log("ERROR: "+error)
          callback(error);
          return;
        }

        const markup = ReactDOM.renderToString(
          <Provider store={store}>
            <RouterContext {...renderProps}/>
          </Provider>
        );
        const clientsource = debug ? 'http://localhost:8080/dist/client.min.js' : '/client.min.js';
        // console.log("MARKUP: "+markup)
        // if(debug){
        //   clientsource = 'http://localhost:8080/client.min.js';
        // }else{
        //   clientsource =  '/client.min.js';
        // }
        this.render('index', {data: markup, client: clientsource, store: store});
        callback(null);
      });
    });
  });

  app.listen(port, () => {
    console.info("==> ✅  Server is listening");
    console.info("==> 🌎  Go to http://%s:%s", hostname, port);
  });

  if(debug){
      if (module.hot) {
        console.log("[HMR] Waiting for server-side updates#############");

        module.hot.accept("./app/routes/routes", () => {
          routes = require("./app/routes/routes");
        });

        module.hot.addStatusHandler((status) => {
          if (status === "abort") {
            setTimeout(() => process.exit(0), 0);
          }
        });
    }
  }


}catch(error){
  console.error(error.stack || error);
}
