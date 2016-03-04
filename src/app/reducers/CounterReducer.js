import { COUNTER_INCREMENT, COUNTER_DECREMENT } from '../actions/CounterActions';

const CounterReducer = (state=7, action) => {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return state+1;
    case COUNTER_DECREMENT:
      return state-1;
    default:
      return state;
  }
};

export {CounterReducer};
