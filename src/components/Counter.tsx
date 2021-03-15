import React, { useContext } from 'react';
import { Context }           from '../context/Context';


const Counter: React.FC = () => {
  const value = useContext(Context);
  const { countState : { count }, incrementCount, decrementCount, resetCount } = value;

  return (
    <div className="mb-5 text-center">
      <div className="btn-group mb-3">
        <button type="button" className="btn btn-outline-secondary" onClick={decrementCount}>Decrement</button>
        <button type="button" className="btn btn-outline-secondary" onClick={resetCount}>Reset</button>
        <button type="button" className="btn btn-outline-secondary" onClick={incrementCount}>Increment</button>
      </div>

      <div><code className="fs-5">{ count }</code></div>
    </div>
  );
};


export default Counter;
