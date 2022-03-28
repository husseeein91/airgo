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
      <CardActionArea
        onClick={(e) => dispatch(markComplete(data.id))}
        sx={{ display: "flex", justifyContent: "flex-start" }}
      >
        <CardMedia
          component="img"
          height="140"
          sx={{ width: "20%" }}
          alt="notebook on a table"
          image="/images/todo.jpg"
        />
        <CardContent sx={{ width: "80%", textAlign: "center" }}>
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
  );
};

Todo.propTypes = {
  data: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default Todo;
