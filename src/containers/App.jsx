import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import CalculatorComponent from '../components/Calculator'
import { incressAction, decraseAction } from '../actions'

const App = props => {
  const { counter, incressAction, decraseAction } = props;

  return (
    <div>
      <CalculatorComponent
        counter={counter}
        incressAction={incressAction}
        decraseAction={decraseAction}
      />
    </div>
  )
};

App.defaultProps = {
  counter: 0
}

export const mapDispatchToProps = dispatch => ({
  dispatch,
  incressAction: payload => dispatch(incressAction(payload)),
  decraseAction: payload => dispatch(decraseAction(payload)),
});

const mapStateToProps = state => ({
  counter: state.counter
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(App);
