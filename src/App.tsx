import React   from 'react';
import Counter from './components/Counter';
import Numbers from './components/Numbers';
import './App.css';


/* =============================================================================

============================================================================= */


const App: React.FC = () => {
  return (
    <main className="py-5">
      <div className="container-fluid px-md-5">
        <h2 className="text-white-3d mb-5 text-center">React / Typescript + Context / Reducer</h2>

        <br />
        <Counter />
        <Numbers />


        <div className="horizontal-ruler">
          <hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/>
          <hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/>
          <hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/>
        </div>

        <p className="w-90 mx-auto">This demo implements a single React Context with multiple reducers.</p>

      </div>
    </main>
  );
}


export default App;
