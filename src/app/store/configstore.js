import thunk from 'redux-thunk';
import React from 'react'
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import {CounterReducer} from '../reducers/CounterReducer'
import { routerReducer, routerMiddleware } from 'react-router-redux'

export function configureStore(history, initialState) {
  const reducer = combineReducers({
    routing: routerReducer,
    counter: CounterReducer
  })

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
