import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Counter from '../components/Counter';
import * as CounterActions from '../actions/CounterActions';

class CounterPage extends React.Component {
  render () {
    const {counterState, counterActions} = this.props;
    return (
      <div>
        <h2>Count Something!!</h2>
        <Counter counter={counterState}
          incrementCounter={counterActions.incrementCounter}
          decrementCounter={counterActions.decrementCounter}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counterState: state.counter
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    counterActions: bindActionCreators(CounterActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterPage);
