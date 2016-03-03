import React, { PropTypes } from 'react'
class Counter extends React.Component{

  static propTypes = {
    counter: PropTypes.number.isRequired,
    incrementCounter: PropTypes.func.isRequired,
    decrementCounter: PropTypes.func.isRequired,
  };

  render(){
    const {counter, incrementCounter, decrementCounter} = this.props
    return(
      <div>
        <h1>{counter}</h1>
        <button onClick={incrementCounter}> + </button>
        <button onClick={decrementCounter}> - </button>
      </div>
    )
  }
}

export default Counter;
