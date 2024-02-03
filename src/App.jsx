import React, { useState } from "react";
import Header from "./components/Header";
import CreateForm from "./components/CreateForm";
import Status from "./components/Status";
import ListGroup from "./components/ListGroup";
import Counter from "./components/Counter";
import TextInput from "./components/TextInput";
import Checker from "./components/Checker";
import Accordion from "./components/Accordion";
import AccordionGroup from "./components/AccordionGroup";

const App = () => {
  const [tasks, setTask] = useState([
    { id: 1, job: "Complete assignment", isDone: false },
    { id: 2, job: "Buy groceries", isDone: false },
    { id: 3, job: "Exercise for 30 minutes", isDone: false },
  ]);

  const addTask = (newTask) => {
    setTask([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTask(tasks.filter((task) => task.id != id));
  };

  const doneTask = (id) => {
    setTask(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  const updateTask = (id, newJob) => {
    setTask(
      tasks.map((task) => (task.id === id ? { ...task, job: newJob } : task))
    );
  };

  const doneAllTask = () => {
    setTask(tasks.map((task) => ({ ...task, isDone: true })));
  };

  return (
    <div className="w-[400px] mx-auto mt-5">
      <Header />
      <CreateForm addTask={addTask} />
      <Status tasks={tasks} />
      <ListGroup
        doneAllTask={doneAllTask}
        updateTask={updateTask}
        deleteTask={deleteTask}
        doneTask={doneTask}
        tasks={tasks}
      />
      {/* <Counter /> */}
      {/* <TextInput /> */}
      {/* <Checker /> */}
      {/* <AccordionGroup/> */}
    </div>
  );
};

export default App;
