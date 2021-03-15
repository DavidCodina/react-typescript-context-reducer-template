import React, { useContext } from 'react';
import { Context }           from '../context/Context';


const Numbers: React.FC = () => {
  const value = useContext(Context);
  const { numbersState: { numbers }, setNumbers } = value;

  return (
    <div className="text-center">
      <button
        className="btn btn-outline-secondary my-3"
        onClick={() => setNumbers([...numbers, numbers.length + 1])}
      >Add Number To Numbers Array</button>

      <div>
        <code className="fs-5">{JSON.stringify(numbers)}</code>
      </div>
    </div>
  );
};


export default Numbers;
