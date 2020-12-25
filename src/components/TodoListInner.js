import React, { useState } from "react";
import TodoForm from "./TodoForm";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const TodoList = ({ todos }) => {
  const [value, setValue] = useState([]);
  return (
    <>
      <List>
        {todos.map((todo, index) => (
          <ListItem key={index.toString()} button dense>
            <ListItemText primary={todo} />

            <ListItemSecondaryAction>
              <IconButton
                aria-label="Delete"
                onClick={() => {
                  deleteTodo(index);
                }}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
            <ListItemText>
              <TodoForm
                saveTodo={(todoText) => {
                  const trimmedText = todoText.trim();
                  if (trimmedText.length > 0) {
                    setValue([...value, trimmedText]);
                  }
                }}
              />
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default TodoList;
