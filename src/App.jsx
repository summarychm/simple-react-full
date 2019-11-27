import React from 'react';
import Counter from './Component/Counter';

function App() {
  return (
    <div>
      <p>Hello world!</p>
      <Counter number={10} add={() => {}} minus={() => {}} />
    </div>
  );
}

export default App;
