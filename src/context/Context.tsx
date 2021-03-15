import React, { createContext, useReducer } from 'react';
import { actions  } from './actions';
import { reducers } from './reducers';


// Create 'placeholder' values, which are later replaced by
// <Context.Provider value={{ ... }}>
const initialValue = {
  countState:     { count: 0 },
  incrementCount: () => {},
  decrementCount: () => {},
  resetCount:     () => {},
  numbersState:   { numbers: [] } as { numbers: number[] },
  setNumbers:     (array: number[]) => {}
};


export const Context = createContext<typeof initialValue>(initialValue);


/* =============================================================================
                               Provider
============================================================================= */
// A wrapper component around the actual Context.Provider.


export const Provider = (props: { children: React.ReactNode }) => {
  const [countState,   countDispatch]   = useReducer(reducers.countReducer,   { count: 0    });
  const [numbersState, numbersDispatch] = useReducer(reducers.numbersReducer, { numbers: [] });


  // Wrapper functions for count-related action creators.
  const incrementCount = () => actions.countActions.incrementCount(countDispatch);
  const decrementCount = () => actions.countActions.decrementCount(countDispatch);
  const resetCount     = () => actions.countActions.resetCount(countDispatch);

  // Wrapper functions for numbers-related action creators.
  const setNumbers     = (value: number[]) => actions.numbersActions.setNumbers(numbersDispatch, value);


  return (
    <Context.Provider value={{
      countState,
      incrementCount,
      decrementCount,
      resetCount,

      numbersState,
      setNumbers
    }}>
      { props.children }
    </Context.Provider>
  );
};
