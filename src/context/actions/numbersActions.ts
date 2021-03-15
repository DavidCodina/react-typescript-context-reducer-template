import { types } from './types';

export const numbersActions = {
  setNumbers: (dispatch: React.Dispatch<any>, value: number[]) => dispatch({ type: types.SET_NUMBERS, payload: value }) // value will be a new array.
};
