import React, { useState } from "react";

const Checker = () => {
  const [done, setDone] = useState(true);
  console.log(done);
  const inputHandler = () => {
    setDone(!done);
  };
  return (
    <div>
      <h1>Check up</h1>
      <input checked={done} onChange={inputHandler} type="checkbox" id="x" />
      <label className=" select-none" htmlFor="x">
        Check
      </label>
    </div>
  );
};

export default Checker;
