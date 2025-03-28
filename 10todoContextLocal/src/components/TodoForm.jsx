import React, { useState } from "react";
import { useTodo } from "../context";

function TodoForm() {
  const [todo, setTodo] = useState(""); //for individual todo & we dont want a todo by default so empty string
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();

    if (!todo) return;

    addTodo({ todo: todo, completed: false }); //Here object will be passed as addTodo functionality was defined like that. addTodo was spreading objects. So object needs to be passed
    setTodo("");
  };

  return (
    <form
      className="flex items-center space-x-2 bg-gray-800 p-3 rounded-lg shadow-lg"
      onSubmit={add}
    >
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-gray-600 rounded-lg px-3 outline-none bg-gray-700 text-white placeholder-gray-400 py-2 focus:ring-2 focus:ring-blue-500 transition"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg transition font-semibold"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
