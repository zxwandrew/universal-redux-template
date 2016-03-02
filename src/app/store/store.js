// import React from 'react'
//
// import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
// import {CounterReducer} from '../reducers/CounterReducer'
// import {CounterPage} from '../pages/CounterPage'
//
// import { routerReducer, routerMiddleware } from 'react-router-redux'
//
// // // Combine Reducers
// // let reducers = combineReducers({
// //     CounterReducer: CounterReducer
// //     // more if you want...
// // });
//
// // const store = createStore(CounterReducer);
//
// // console.log(store.getState())
// // store.dispatch({type: 'INCREMENT'});
// // console.log(store.getState())
// // store.subscribe(CounterPage);
//
// // export default store;
//
// export function configureStore(history, initialState){
//   const reducer = combineReducers({
//     routing: routerReducer,
//     CounterReducer: CounterReducer
//   })
//   const store = createStore(
//     reducer,
//     initialState,
//     applyMiddleware(history)
//   )
//   return store
// }



import React from 'react'

import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
// import { createDevTools } from 'redux-devtools'
// import LogMonitor from 'redux-devtools-log-monitor'
// import DockMonitor from 'redux-devtools-dock-monitor'

import {CounterReducer} from '../reducers/CounterReducer'

import { routerReducer, routerMiddleware } from 'react-router-redux'

// export const DevTools = createDevTools(
//   <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
//     <LogMonitor theme="tomorrow" preserveScrollTop={false} />
//   </DockMonitor>
// )

export function configureStore(history, initialState) {
  const reducer = combineReducers({
    routing: routerReducer,
    counter: CounterReducer
  })

  // let devTools = []
  // if (typeof document !== 'undefined') {
  //   devTools = [ DevTools.instrument() ]
  // }

  const store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(
        routerMiddleware(history),
        thunk
      ),
      typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
    )
  )

  return store
}
