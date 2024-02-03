import React, { useState } from "react";
import EmptyList from "./EmptyList";
import List from "./List";

const ListGroup = ({
  tasks,
  deleteTask,
  doneTask,
  updateTask,
  doneAllTask,
}) => {
  return (
    <div>
      {tasks.length === 0 && <EmptyList />}
      {tasks.map(({ id, job, isDone }) => (
        <List
          updateTask={updateTask}
          deleteTask={deleteTask}
          doneTask={doneTask}
          key={id}
          id={id}
          job={job}
          isDone={isDone}
        />
      ))}
      <div className="flex justify-end items-center text-center">
        <button
          onClick={doneAllTask}
          className=" bg-gray-400 px-4 py-1 font-bold text-gray-700 rounded-full"
        >
          All Done
        </button>
      </div>
    </div>
  );
};

export default ListGroup;
