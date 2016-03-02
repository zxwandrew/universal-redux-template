import React, { PropTypes } from 'react'
import Counter from '../components/Counter'
import { connect } from 'react-redux'

class CounterPage extends React.Component{
  static propTypes = {
    counter: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
  };

  render(){
    return(
      <div>
      <h2>Count Something!!</h2>
      <Counter value={this.props.counter}
        onIncrement={this.props.onIncrement}
        onDecrement={this.props.onDecrement}>
      </Counter>
    </div>

    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter
});

const mapDispatchToProps = (dispatch) => ({
  onIncrement : ()=>{
    dispatch({
      type: "INCREMENT"
    })
  },
  onDecrement : ()=>{
    dispatch({
      type: "DECREMENT"
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CounterPage);
