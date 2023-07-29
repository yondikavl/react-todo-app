import React, { useState } from "react";

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
    <form onSubmit={handleSubmit} className="flex justify-between w-96 mb-8">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="py-3 px-6 w-64 rounded-lg"
        placeholder="What is the task today?"
      />
      <button
        type="submit"
        className="bg-amber-300 text-zinc-900 rounded-lg py-3 px-6 font-bold hover:bg-amber-400"
      >
        Add Task
      </button>
    </form>
  );
};
