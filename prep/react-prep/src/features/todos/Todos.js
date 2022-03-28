import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, toggleCompleted } from "./todosSlice";

import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Todo from "../../components/Todo";

const Todos = () => {
  const todos = useSelector((state) => state.todos.todos);
  const nextId = useSelector((state) => state.todos.nextId);
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    if (e.key === "Enter") {
      return handleAddTodo();
    }
    setTodo(e.target.value);
  };
  const handleAddTodo = () => {
    if (todo === "") {
      alert("you can not add an empty todo!");
      return;
    }
    let todoItem = {
      title: todo,
      id: nextId,
      completed: false,
    };
    dispatch(addTodo(todoItem));
    setTodo("");
  };
  return (
    <Container maxWidth="md">
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
            value={todo}
            variant="standard"
            onChange={handleChange}
            onKeyDown={(e) => handleChange(e)}
          />
          <Button
            color="primary"
            variant="contained"
            size="large"
            type="submit"
            onClick={handleAddTodo}
          >
            Add Todo{" "}
            <AddCircleIcon sx={{ paddingX: "1px", marginLeft: "15px" }} />
          </Button>
        </Grid>
        {todos.length <= 0 ? (
          <Grid item xs={12}>
            {" "}
            <Typography gutterBottom variant="h5" component="div">
              You have not todos right now, try add some.
            </Typography>{" "}
          </Grid>
        ) : (
          todos.map((todo) => (
            <Grid key={todo.id} item xs={12}>
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
    </Container>
  );
};

export default Todos;
