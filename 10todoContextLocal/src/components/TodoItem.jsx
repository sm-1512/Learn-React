import React, { useState } from "react";
import { useTodo } from "../context";

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <div
      className={`flex items-center justify-between border border-gray-700 rounded-lg px-5 py-3 shadow-md transition-all duration-300 ${
        todo.completed
          ? "bg-gradient-to-r from-green-400 to-green-500 text-gray-900"
          : "bg-gradient-to-r from-indigo-500 to-purple-600 text-white"
      }`}
    >
      {/* Checkbox for Completion */}
      <input
        type="checkbox"
        className="cursor-pointer w-6 h-6 accent-green-500"
        checked={todo.completed}
        onChange={toggleCompleted}
      />

      {/* Todo Text Input */}
      <input
        type="text"
        className={`w-full mx-3 text-lg font-medium bg-transparent rounded-md focus:outline-none ${
          isTodoEditable
            ? "border border-gray-400 px-3 py-1 bg-white text-gray-900"
            : "border-transparent"
        } ${todo.completed ? "line-through text-gray-600" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />

      {/* Action Buttons Container */}
      <div className="flex space-x-4">
        {/* Edit / Save Button */}
        <button
          className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white transition duration-200 shadow-md disabled:opacity-50"
          onClick={() => {
            if (todo.completed) return;
            if (isTodoEditable) {
              editTodo();
            } else setIsTodoEditable((prev) => !prev);
          }}
          disabled={todo.completed}
        >
          {isTodoEditable ? "💾" : "✏️"}
        </button>

        {/* Delete Button */}
        <button
          className="w-10 h-10 rounded-lg flex items-center justify-center bg-white hover:bg-red-600 text-white transition duration-200 shadow-md"
          onClick={() => deleteTodo(todo.id)}
        >
          ❌
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
