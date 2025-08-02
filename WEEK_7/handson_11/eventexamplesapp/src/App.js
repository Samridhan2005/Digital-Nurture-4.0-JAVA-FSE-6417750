import React, { useState } from 'react';
import CurrencyConverter from './CurrencyConverter';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
  };

  const decrement = () => setCount(prev => prev - 1);

  

  const sayMessage = (msg) => {
    alert(msg);
  };

  const handlePress = (e) => {
    alert("I was clicked");
    console.log("Event type:", e.type);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>  
      <button onClick={() => sayMessage("Welcome")}>Say Welcome</button>
      <button onClick={handlePress}>Click me</button>

      <CurrencyConverter />
    </div>
  );
}

export default App;
