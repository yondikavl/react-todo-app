import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    // prevent default action
    e.preventDefault();
    if (value) {
      // add todo
      addTodo(value);
      // clear form after submission
      setValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex justify-between mb-8">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="py-3 px-6 w-5/6 md:w-5/6 mr-3 rounded-lg focus:outline-0"
        placeholder="What is the task today?"
      />
      <button
        type="submit"
        className="flex justify-center items-center focus:outline-none bg-amber-300 text-zinc-900 rounded-lg py-3 px-6 font-bold w-1/6 md:w-1/5 hover:bg-amber-400"
      >
        <FontAwesomeIcon icon={faPlus} className="mx-2" />
        <span className="hidden md:block">Add Task</span>
      </button>
    </form>
  );
};
