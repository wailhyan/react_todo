import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className="border border-gray-200 rounded-xl p-5">
      <h1 className=" font-bold text-2xl mb-2">Counter : {count}</h1>
      <div className="flex gap-2">
        <button
          onClick={decrement}
          className=" bg-green-500 rounded-lg px-2 py-1"
        >
          Sub (-)
        </button>
        <button
          onClick={increment}
          className=" bg-green-500 rounded-lg px-2 py-1"
        >
          Add (+)
        </button>
      </div>
    </div>
  );
};

export default Counter;
