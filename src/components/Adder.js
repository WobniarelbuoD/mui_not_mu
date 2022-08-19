import { Button, Divider, List, ListItem, ListItemButton, ListItemText, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";


const Adder = () => {
    const [input, inputUpdate] = useState()
    const [items, setItems] = useState([])

    const arrayUpdate = () =>{
        setItems([...items, input])
    }

    return(
  <Container >
    <Typography variant="h2">Task Master</Typography>
    <Divider sx={{whiteSpace:"pre-wrap", mt:10}}>
    <TextField onChange={e => inputUpdate(e.target.value)} label="Text"></TextField>
    <Button onClick={() => arrayUpdate()} variant="contained" sx={{mt:5}}>Add</Button>
    <List sx={{mt:5}}>
        {/* {Items.map(item =>{
            return(<ListItem key={item}><ListItemText primary={item}></ListItemText></ListItem>)})} */}
    </List>
    </Divider>
  </Container>
)
};

export default Adder;
