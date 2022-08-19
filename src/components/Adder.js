import {Button,Divider,List,ListItem,ListItemButton,ListItemText,TextField,Typography,} from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";

const Adder = () => {
  const [input, inputUpdate] = useState();
  const [items, setItems] = useState([]);

  const arrayUpdate = () => {
    setItems([...items, input]);
    console.log(items)
  };

  const remove = (index) =>{
    items.splice(index,1)
    setItems([...items])
    console.log(items)
  }

  return (
    <Container>
      <Typography variant="h2">Task Master</Typography>
      <Divider sx={{ whiteSpace: "pre-wrap", mt: 10 }}>
        <TextField
          onChange={(e) => inputUpdate(e.target.value)}
          label="Text"
        ></TextField>
        <Button onClick={() => arrayUpdate()} variant="contained" sx={{ mt: 5 }}>Add</Button>
      <List sx={{ mt: 5 }}>
        {items.map((item,index) => {
          return (
            <ListItem key={index}><ListItemText primary={item}></ListItemText><ListItemButton onClick={() => remove(index)}>Delete</ListItemButton></ListItem>
          );
        })}
      </List>
      </Divider>
    </Container>
  );
};

export default Adder;
