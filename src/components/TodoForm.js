import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
const TodoForm = ({ saveTodo }) => {
  const [value, setValue] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        saveTodo(value);
      }}
    >
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <TextField
          variant="outlined"
          placeholder="Add todo"
          margin="normal"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
        />
        <Button
          onClick={(e) => {
            saveTodo(value);
            console.log(value);
          }}
          variant="contained"
          color="primary"
        >
          ADD
        </Button>
      </Grid>
    </form>
  );
};

export default TodoForm;
