import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, toggleCompleted } from "./todosSlice";

import { Button, Grid, TextField } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
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
      <Grid container columnSpacing={12} rowSpacing={2}>
        <Grid
          item
          xs={12}
          sx={{ display: "flex", justifyContent: "space-around" }}
        >
          <TextField
            sx={{
              width: "80%",
              outlineColor: "primary",
              borderColor: "primary",
            }}
            placeholder="Ex.meet with jane"
            color="primary"
            type="text"
            focused
            variant="standard"
            onChange={handleChange}
          />
          <Button
            color="primary"
            variant="contained"
            size="large"
            onClick={handleAddTodo}
          >
            Add Todo{" "}
            <AddCircleIcon sx={{ paddingX: "1px", marginLeft: "15px" }} />
          </Button>
        </Grid>
        {todos.length <= 0 ? (
          <div>you have no todos right now try add some.</div>
        ) : (
          todos.map((todo) => (
            <Grid key={todo.id} item xs={6}>
              <Todo
                key={todo.id}
                data={todo}
                markComplete={toggleCompleted}
                deleteTodo={removeTodo}
              />
            </Grid>
          ))
        )}
      </Grid>
    </>
  );
};

export default Todos;
