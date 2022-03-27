import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, toggleCompleted } from "./todosSlice";

import Todo from "../../components/Todo";

const Todos = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleAddTodo = () => {
    if (todo === "") {
      alert("you can not add an empty todo!");
      return;
    }
    let todoItem = {
      title: todo,
      id: todos.length + 1,
      completed: false,
    };
    dispatch(addTodo(todoItem));
    setTodo("");
  };
  return (
    <>
      <div className="max-h-72 overflow-y-scroll px-4 py-4 my-6 mx-auto max-w-lg">
        {todos.length <= 0 ? (
          <div>you have no todos right now try add some.</div>
        ) : (
          todos.map((todo) => (
            <Todo
              key={todo.id}
              data={todo}
              markComplete={toggleCompleted}
              deleteTodo={removeTodo}
            />
          ))
        )}
      </div>
      <input
        className="placeholder:text-white outline-none w-1/3 mx-2 px-2 py-2 text-white  bg-cyan-600"
        placeholder="Ex.meet with jane"
        type="text"
        onChange={handleChange}
      />
      <button
        className="px-4 py-2 bg-cyan-600 text-white "
        onClick={handleAddTodo}
      >
        Add Todo
      </button>
    </>
  );
};

export default Todos;
