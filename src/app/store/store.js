import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk';
import {CounterReducer} from '../reducers/CounterReducer'
import {CounterPage} from '../pages/CounterPage'

import { routerReducer, routerMiddleware } from 'react-router-redux'

// // Combine Reducers
// let reducers = combineReducers({
//     CounterReducer: CounterReducer
//     // more if you want...
// });

const store = createStore(CounterReducer);

// console.log(store.getState())
// store.dispatch({type: 'INCREMENT'});
// console.log(store.getState())
// store.subscribe(CounterPage);

export default store;
