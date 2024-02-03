import React, { useState } from "react";
import Accordion from "./Accordion";

const AccordionGroup = () => {
  const [faq, setFaq] = useState([
    {
      id: 1,
      question: "What is JavaScript?",
      answer:
        "JavaScript is a high-level, interpreted programming language that is widely used for building dynamic and interactive websites.",
      isOpen: false,
    },
    {
      id: 2,
      question: "How do you declare a variable in JavaScript?",
      answer:
        "You can declare a variable using the 'var', 'let', or 'const' keyword, followed by the variable name.",
      isOpen: false,
    },
    {
      id: 3,
      question: "What is an array in JavaScript?",
      answer:
        "An array is a data structure that stores a collection of elements, each identified by an index or a key.",
      isOpen: false,
    },
    {
      id: 4,
      question: "How do you add an element to the end of an array?",
      answer:
        "You can use the 'push' method to add an element to the end of an array.",
      isOpen: false,
    },
    {
      id: 5,
      question: "What is the purpose of the 'map' function in JavaScript?",
      answer:
        "The 'map' function is used to create a new array by applying a provided function to each element of the original array.",
      isOpen: false,
    },
  ]);

  const openAccordion = (id) => {
    setFaq(
      faq.map((el) =>
        el.id === id ? { ...el, isOpen: true } : { ...el, isOpen: false }
      )
    );
  };
  return (
    <div>
      <h1 className=" font-bold text-3xl mb-3 px-4">FAQ Title</h1>
      {faq.map(({ id, question, answer, isOpen }) => (
        <Accordion
          key={id}
          id={id}
          openAccordion={openAccordion}
          question={question}
          answer={answer}
          isOpen={isOpen}
        />
      ))}
    </div>
  );
};

export default AccordionGroup;
