import React, { useState } from "react";

const TextInput = () => {
  const [text, setText] = useState("");
  console.log(text);
  const handleInput = (event) => {
    setText(event.target.value);
  };
  return (
    <div>
      <h1>Name Input</h1>
      <input
        type="text"
        className="border border-gray-500 px-2 py-1 rounded-lg mt-3 w-full"
        value={text}
        onChange={handleInput}
      />
      <p>{text}</p>
    </div>
  );
};

export default TextInput;
