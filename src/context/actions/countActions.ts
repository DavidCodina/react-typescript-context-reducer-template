import { types } from './types';

export const countActions = {
  incrementCount: (dispatch: React.Dispatch<any>) => dispatch({ type: types.INCREMENT, payload: {value: 1} }),
  decrementCount: (dispatch: React.Dispatch<any>) => dispatch({ type: types.DECREMENT, payload: {value: 1} }),
  resetCount:     (dispatch: React.Dispatch<any>) => dispatch({ type: types.RESET,     payload: {value: 0} })
};
