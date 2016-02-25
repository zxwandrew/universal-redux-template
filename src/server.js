import koa from "koa";
import register from "babel-core/register";
import React from "react";
import KoaReactView from "koa-react-view";
import koaStatic from "koa-static";
import path from "path";
import ReactDOM from "react-dom/server";
var favicon = require('koa-favicon');
import { match, RouterContext } from 'react-router';
import { routes } from "./app/routes/routes";
import "babel-polyfill";

try {
  const app      = koa();
  const hostname = process.env.HOSTNAME || "localhost";
  const port     = process.env.PORT || 8000;

  let viewpath = 'dist/views';
  app.use(koaStatic("dist"));
  app.use(favicon('public/favicon.ico'));

  KoaReactView(app, {views: viewpath})
  register({
    only: [
      viewpath
    ]
  });

  app.use(function *(next) {
    // yield ((callback) => {
      const location  = this.path;
    	match({routes, location}, (error, redirectLocation, props) => {
        if (redirectLocation) {
          this.redirect(redirectLocation.pathname + redirectLocation.search, "/");
          return;
        }

        if (error || !props) {
          console.log("ERROR: "+error)
          // callback(error);
          return;
        }

        const markup = ReactDOM.renderToString(<RouterContext {...props}/>);
        this.render('index', {data: markup});
      });
    // });
  });

  app.listen(port, () => {
    console.info("==> ✅  Server is listening");
    console.info("==> 🌎  Go to http://%s:%s", hostname, port);
  });


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
