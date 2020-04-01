import React from 'react';

const CalculatorComponent = props => {
  const { counter, incressAction, decraseAction } = props;

  const incressHandle = () => {
    incressAction()
  };

  const decraseHandle = () => {
    decraseAction()
  };

  return (
    <div>
      <h3>{counter}</h3>
      <button onClick={incressHandle}>+</button>
      <button onClick={decraseHandle}>-</button>
    </div>
  )
}

export default React.memo(CalculatorComponent);
