import { combineReducers } from 'redux';
import calculatorReducers from './calculatorReducers'

export default combineReducers({
  counter: calculatorReducers
});
