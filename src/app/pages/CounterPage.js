import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import Counter from '../components/Counter'
import * as CounterActions from '../actions/CounterActions'

class CounterPage extends React.Component{
  render(){
    return(
      <div>
        <h2>Count Something!!</h2>
        <Counter/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter
});
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(CounterActions, dispatch)
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
