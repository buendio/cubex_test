import React, { useState } from "react";
import TodoForm from "./TodoForm";
import ArrowUpwardSharpIcon from "@material-ui/icons/ArrowUpwardSharp";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import ArrowDownwardSharpIcon from "@material-ui/icons/ArrowDownwardSharp";
const TodoList = ({ todos, deleteTodo, moveDown, moveUp }) => {
  const [value, setValue] = useState([]);
  return (
    <>
      <List>
        {todos.map((todo, index) => (
          <ListItem key={index.toString()} dense>
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
            <ListItemText>
              {index ? (
                <ArrowUpwardSharpIcon
                  onClick={() => {
                    moveUp(index);
                  }}
                />
              ) : (
                ""
              )}
            </ListItemText>
            <ListItemText>
              {console.log(todos.length)}
              {index === todos.length - 1 ? (
                ""
              ) : (
                <ArrowDownwardSharpIcon
                  onClick={() => {
                    moveDown(index);
                  }}
                />
              )}
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default TodoList;
