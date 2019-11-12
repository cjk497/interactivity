import React, { useState } from 'react';
import './App.css';
import { tsPropertySignature } from '@babel/types';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <ExampleInteraction text="First Button" />
        <ExampleInteraction text="Second Button" />
        <ExampleInteraction text="Third Button" />
      </header>
    </div>
  );
}

function ExampleInteraction(props) {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  if(count > 0) {
    return (
      <div>
        <button className="hotbutton" onClick={handleClick}>
          I've been clicked!
        </button>
      </div>
    )
  } else {
    return (
      <div>
        <button className="hotbutton" onClick={handleClick}>
          {props.text}
        </button>
      </div>
    )
  }
}


export default App;
