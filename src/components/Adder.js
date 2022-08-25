import {Box, Button,Divider,FormControl,FormHelperText,Input,InputLabel,List,ListItem,ListItemButton,ListItemText,Paper,TextField,Typography,} from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useRef, useState } from "react";

const Adder = () => {
  const [input, inputUpdate] = useState('');
  const [err, errUpdate] = useState(false);
  const [mess,messUpdate] = useState('')
  const [lever,leverUpdate] = useState(false)
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('content')) === null ? [] : JSON.parse(localStorage.getItem('content')));

  useEffect(()=>{ localStorage.setItem('content', JSON.stringify(items)) }, [items])

  const arrayUpdate = (event) => {
    event.preventDefault();
    if(!lever){
    if(input != null && input.length != 0){
    setItems([...items, input]);
    errUpdate(false)
    messUpdate('')
    inputUpdate("")
  }
  else{
    errUpdate(true)
    messUpdate("Input field empty!")
  }
  }
  }

  const remove = (index) =>{
    items.splice(index,1)
    setItems([...items])
  }

  const edit = (index) =>{
    inputUpdate(items[index])
    leverUpdate(true)
  }

  return (
    <Container sx={{display:"flex", alignItems:"center", flexDirection:"column", mt:5, minHeight:"70.9vh"}}>
      <Typography color="white" variant="h2">Task Master</Typography>

      <form  onSubmit={(event) => arrayUpdate(event)}> 
      <FormControl sx={{mt:10,minWidth:"300px"}}>
        <InputLabel htmlFor="my-input">Add A Task</InputLabel>
        <Input onChange={(e) => inputUpdate(e.target.value)} value={input} error={err} label="Text" id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText disabled={err} error id="my-helper-text">{mess}</FormHelperText>
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>Add Task</Button>
      </FormControl>

      <List sx={{ mt: 5 , display:"flex", alignItems:"center", flexDirection:"Column",color:"white"}}>
        {items.map((item,index) => {
          return (
            <ListItem sx={{border:"1px solid white", borderRadius:"20px;",minWidth:"50vw", m:1}} key={index}>
              <ListItemText primary={item}></ListItemText>
              <ListItemButton sx={{borderRadius:"20px",border:"1px solid white",maxWidth:"65px",marginRight:"5px"}} onClick={() => edit(index)}>Edit</ListItemButton>
              <ListItemButton sx={{borderRadius:"20px",border:"1px solid white",maxWidth:"80px"}} onClick={() => remove(index)}>Delete</ListItemButton>
            </ListItem>
          );
        })}
      </List>
      </form>

    </Container>
  );
};

export default Adder;
