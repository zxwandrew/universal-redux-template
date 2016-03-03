import { INCREMENT, DECREMENT } from '../actions/CounterActions';

const CounterReducer = (state=7, action)=>{
  switch(action.type){
    case INCREMENT:
      return state+1;
    case DECREMENT:
      return state-1;
    default:
      return state;
  }
};

export {CounterReducer}