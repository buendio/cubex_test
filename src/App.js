import React, { useState } from "react";
import "./styles.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);
  console.log(todos);
  return (
    <div className="App">
      <h1>список заметок!</h1>
      <TodoList
        todos={todos}
        deleteTodo={(todoIndex) => {
          const newTodos = todos.filter((_, index) => index !== todoIndex);
          setTodos(newTodos);
        }}
        moveUp={(todoIndex) => {
          console.log(todoIndex);

          [todos[todoIndex], todos[todoIndex - 1]] = [
            todos[todoIndex - 1],
            todos[todoIndex]
          ];
          setTodos([...todos]);
        }}
        moveDown={(todoIndex) => {
          console.log(todoIndex);
          [todos[todoIndex], todos[todoIndex + 1]] = [
            todos[todoIndex + 1],
            todos[todoIndex]
          ];
          setTodos([...todos]);
        }}
      />
      <TodoForm
        saveTodo={(todoText) => {
          const trimmedText = todoText.trim();
          if (trimmedText.length > 0) {
            setTodos([...todos, trimmedText]);
          }
        }}
      />
    </div>
  );
};

export default App;
