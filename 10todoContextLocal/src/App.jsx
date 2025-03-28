import { useEffect, useState } from "react";
import "./App.css";
import { TodoProvider } from "./context";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]); //todos here is an array and it has a lot of values

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]); //We cant simply write setTodos(todo) because previously existing todos will be removed so we will need access to the previous state to know how many todos were already present
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, ...todo } : prevTodo
      )
    ); //First we accessed the prev array, then we looped the prev array, and tried to find the id of the todo that we want to update

    /* prev.map((eachVal) => {
      if(eachVal.id == id) todo
      else prevTodo 
    }) */ //Simplified version of the above steps
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    ); /// ... (spread operator) creates a new copy of an array or object. The setTodos function updates the state by mapping over the previous todos. If a todo matches the given id, we create a new object with the same properties (...prevTodo) but update the completed property by toggling its value. This ensures that we do not mutate the existing state but instead return a new updated array.
  };
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  //We want that whenever we add a todo it gets added to the local storage. We could write another method in the above useEffect with todos as a dependency but then as a result whenever there will be a change in that todos useEffect will run. We dont want that and hence we will use a separate useEffect.
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  //JSON.parse() is used for parsing data that was received as JSON; it deserializes a JSON string into a JavaScript object. JSON.stringify() on the other hand is used to create a JSON string out of an object or array; it serializes a JavaScript object into a JSON string.
  // String is an unstructured data as it lacks any predefined schema or data model
  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
