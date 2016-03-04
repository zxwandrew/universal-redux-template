import expect from 'expect'
import * as actions from '../../src/app/actions/CounterActions'

describe('actions', () => {
  it('should increment counter', () => {
    const expectedAction = {
      type: actions.COUNTER_INCREMENT,
    }
    expect(actions.incrementCounter()).toEqual(expectedAction)
  });

  it('should decrement conter', ()=>{
    const expectedAction = {
      type: actions.COUNTER_DECREMENT,
    }
    expect(actions.decrementCounter()).toEqual(expectedAction)
  })
})
