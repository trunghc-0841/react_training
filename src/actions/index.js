import { INCRESS, DECREASE } from '../constants'

export const incressAction = payload => ({
  type: INCRESS,
  payload: payload
});

export const decraseAction = payload => ({
  type: DECREASE,
  payload: payload
});
