import { types } from '../actions/types';


export const countReducer = (state: { count: number }, action: { type: string, payload: any }) => {
  switch (action.type){
    case types.INCREMENT: return { ...state, count: state.count + action.payload.value };
    case types.DECREMENT: return { ...state, count: state.count - action.payload.value };
    case types.RESET:     return { ...state, count: action.payload.value };
    default:        return state;
  }
};
