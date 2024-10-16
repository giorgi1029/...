import React, { useState } from "react";
import "./Count.css";

const Count = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <h1>Count: {count}</h1>
      <button className="counter-button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button
        className="counter-button decrement"
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
    </div>
  );
};

export default Count;
