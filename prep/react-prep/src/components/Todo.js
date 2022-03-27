import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

const Todo = ({ data, markComplete, deleteTodo }) => {
  const dispatch = useDispatch();
  return (
    <div
      className={`bg-cyan-600 text-white max-w-xl mx-auto px-5 py-3 m-2 flex flex-row justify-around ${
        data.completed ? "opacity-80" : "opacity-100"
      }`}
    >
      <h3
        className="basis-2/3 text-left text-lg cursor-pointer"
        onClick={(e) => dispatch(markComplete(data.id))}
      >
        {data.completed ? <strike>{data.title}</strike> : data.title}
      </h3>
      <div className="">
        <button
          className="basis-1/3 px-4 py-2 bg-red-500 text-white rounded-md"
          onClick={(e) => dispatch(deleteTodo(data.id))}
        >
          Remove Todo
        </button>
      </div>
    </div>
  );
};

Todo.propTypes = {
  data: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default Todo;
