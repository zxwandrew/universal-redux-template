export const COUNTER_INCREMENT = 'COUNTER_INCREMENT';
export const COUNTER_DECREMENT = 'COUNTER_DECREMENT';

export const incrementCounter = () => {
  return {
    type: COUNTER_INCREMENT
  };
};

export const decrementCounter = () => {
  return {
    type: COUNTER_DECREMENT
  };
};
