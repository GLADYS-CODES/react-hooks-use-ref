import React, { useState } from "react";

function CounterState() {
  const [count, setCount] = useState(0);

  function handleClick() {
    count.current = count.current + 1;
    console.log(count.current);
  }

  return (
    <div>
      <h1>CounterState</h1>
      <button onClick={handleClick}>{count.current}</button>
    </div>
  );
}

export default CounterState;
