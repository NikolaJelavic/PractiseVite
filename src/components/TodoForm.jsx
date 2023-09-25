import { useState } from "react";
import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import CreateIcon from "@mui/icons-material/Create"; 
import { InputAdornment, IconButton } from "@mui/material";



export default function TodoForm({addTodo}) {
  const [text, setText] = useState("");
  

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e)=> {
    e.preventDefault();
    addTodo(text);
    setText("")
  }

  return (
    <ListItem>
        <form onSubmit={handleSubmit}>
      <TextField
        id="outlined-basic"
        label="Add todo"
        variant="outlined"
        onChange={handleChange} 
        value={text}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton aria-label="toggle password visibility" edge="end" type="submit">
                <CreateIcon /> 
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      </form>
    </ListItem>
  );
}
