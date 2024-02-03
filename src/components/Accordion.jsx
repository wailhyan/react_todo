import React, { useState } from "react";

const Accordion = ({ id, openAccordion, question, answer, isOpen }) => {
  return (
    <div className=" border border-gray-500 ">
      <div
        onClick={() => openAccordion(id)}
        className=" border border-gray-300 cursor-pointer flex justify-between bg-gray-200 px-4 py-2 "
      >
        <h1 className=" font-bold text-xl">{question}</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={`w-6 h-6 duration-200 `}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 15.75 7.5-7.5 7.5 7.5"
          />
        </svg>
      </div>
      {isOpen && (
        <div className={`animate_animated animate__bounceIn mt-2 p-2 `}>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
