import React, { useState } from "react";

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    // prevent default action
    e.preventDefault();
    // edit todo
    editTodo(value, task.id);
  };
  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg my-4">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="py-3 px-6 bg-white rounded-lg"
        placeholder="Update task"
      />
      <button type="submit" className="bg-amber-300 py-3 px-6">
        Save Task
      </button>
    </form>
  );
};
