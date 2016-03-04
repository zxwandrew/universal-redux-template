import expect from 'expect'
import {CounterReducer} from '../../src/app/reducers/CounterReducer'
import * as actions from '../../src/app/actions/CounterActions'

describe('counter reducer', ()=>{
  it('should return initial state', ()=>{
    const expectedState = 7
    expect(CounterReducer(undefined, {})).toBe(expectedState);
  });

  it('should return initial state', ()=>{
    const expectedState = 101
    expect(CounterReducer(100, {type: actions.COUNTER_INCREMENT})).toBe(expectedState);
  });

  it('should return initial state', ()=>{
    const expectedState = -1
    expect(CounterReducer(0, {type: actions.COUNTER_DECREMENT})).toBe(expectedState);
  });

  it('should return initial state', ()=>{
    const expectedState = 8
    expect(CounterReducer(8, {type: 'UnKnOwn'})).toBe(expectedState);
  });

})
