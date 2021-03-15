import { types } from '../actions/types';


export const numbersReducer = (state: { numbers: number[] }, action: { type: string, payload: any }) => {
  switch (action.type){
    case types.SET_NUMBERS: return {
      numbers: [ ...action.payload ]
    };

    default: return state;
  }
};
