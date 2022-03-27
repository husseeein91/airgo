import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  CardActionArea,
  Button,
  Typography,
  Box,
} from "@mui/material";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";

const Todo = ({ data, markComplete, deleteTodo }) => {
  const dispatch = useDispatch();
  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardActionArea onClick={(e) => dispatch(markComplete(data.id))}>
        <CardMedia
          component="img"
          height="140"
          width="140"
          alt="notebook on a table"
          image="./todo.jpg"
        />
        <CardContent>
          <Typography
            sx={{ textDecoration: data.completed ? "line-through" : "" }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {data.title}
          </Typography>
          <Box sx={{ display: "flex", alignContent: "center", color: "error" }}>
            {!data.completed ? (
              <AccessTimeIcon sx={{ width: 20 }} />
            ) : (
              <CheckIcon sx={{ width: 20 }} />
            )}
            <Typography
              sx={{ paddingX: 1 }}
              variant="body1"
              color={data.completed ? "text.success" : "text.error"}
            >
              {data.completed ? "Completed" : "Harry up"}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="error"
          variant="contained"
          onClick={(e) => dispatch(deleteTodo(data.id))}
        >
          Remove Todo <DeleteIcon />
        </Button>
      </CardActions>
    </Card>
    // <div
    //   className={`bg-cyan-600 text-white max-w-xl mx-auto px-5 py-3 m-2 flex flex-row justify-around ${
    //     data.completed ? "opacity-80" : "opacity-100"
    //   }`}
    // >
    //   <h3
    //     className="basis-2/3 text-left text-lg cursor-pointer"
    //     onClick={(e) => dispatch(markComplete(data.id))}
    //   >
    //     {data.completed ? <strike>{data.title}</strike> : data.title}
    //   </h3>
    //   <div className="">
    //     <button
    //       className="basis-1/3 px-4 py-2 bg-red-500 text-white rounded-md"
    //       onClick={(e) => dispatch(deleteTodo(data.id))}
    //     >
    //       Remove Todo
    //     </button>
    //   </div>
    // </div>
  );
};

Todo.propTypes = {
  data: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default Todo;
