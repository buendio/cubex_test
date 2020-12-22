import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>список заметок!</h1>
      <ul>
        <li>1 first</li>
        <li>
          <input className="input" type="text" />
          <button>Добавить</button>
        </li>
      </ul>
    </div>
  );
}
