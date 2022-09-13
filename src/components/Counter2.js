import React, { useState } from 'react';

const Counter2 = () => {

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    console.log("incr");
    setCount(count + 1);

  }

  const handleDecrement = () => {
    console.log("decr");
    setCount(count - 1);
  }

  return (
    <div>
      <button onClick={handleDecrement}>Decrement</button>
      <h1>Count is : {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>

  );

}

export default Counter2;