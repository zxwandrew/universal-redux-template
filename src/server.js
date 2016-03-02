import babelPolyfill from "babel-polyfill";
import koa from "koa";
import React from "react";
import ReactDOM from "react-dom/server";
import { match, RouterContext } from 'react-router';
import koaStatic from "koa-static";
import routesContainer from "./app/routes/routes";

// import path from "path";
// import  favicon from 'koa-favicon';


import KoaReactView from "koa-react-view";
import register from "babel-core/register";

import { Provider } from 'react-redux';
import {store} from './app/store/store'

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
      const location  = this.path;


    	match({routes, location}, (error, redirectLocation, renderProps) => {
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
//
// import express from 'express'
// import http from 'http';
//
// import React from 'react';
// import { renderToString } from 'react-dom/server';
// import { match, RouterContext } from 'react-router';
// import reactViews from 'express-react-views';
//
// import { routes } from './app/routes/routes';
//
// const app = express();
//
// app.set('port', process.env.PORT || 3003);
// app.set('views', 'views');
// app.set('view engine', 'jsx');
// app.engine('jsx', reactViews.createEngine());
//
// app.use(express.static('dist'));
//
// app.get('*', (req, res) => {
//   match({routes, location: req.url}, (err, redirectLocation, props) =>{
//     if(err){
//       res.status(500).send(err.message);
//     }else if(redirectLocation){
//       res.redirect(302, redirectLocation.pathname + redirectLocation.search);
//     }else if (props){
//       const markup = renderToString(<RouterContext {...props}/>);
//       res.render('index.jsx', {data: markup})
//     }else{
//       res.sendStatus(404);
//     }
//   });
// });
//
// const server = http.createServer(app);
//
// server.listen(app.get('port'));
// server.on('listening', () => {
//   console.log('Listening on 3003');
//   console.log(__dirname);
// });
