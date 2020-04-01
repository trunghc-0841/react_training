import { INCRESS, DECREASE } from '../constants'

const initialState = {
  counter: 0
};

const calculatorReducers = (state = initialState, action) => {
  let draft;
  switch (action.type) {
    case INCRESS:
      draft = state + 1;
      break;
    case DECREASE:
      draft = state - 1;
      break;
    default:
      draft = state.counter
  }
  return draft;
}

export default calculatorReducers;
