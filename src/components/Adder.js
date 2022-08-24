import {Box, Button,Divider,List,ListItem,ListItemButton,ListItemText,TextField,Typography,} from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";

const Adder = () => {
  const [input, inputUpdate] = useState();
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('content')) === null ? [] : JSON.parse(localStorage.getItem('content')));

  useEffect(()=>{ localStorage.setItem('content', JSON.stringify(items)) }, [items])



  const arrayUpdate = () => {
    setItems([...items, input]);
  };

  const remove = (index) =>{
    items.splice(index,1)
    setItems([...items])
  }

  return (
    <Container sx={{display:"flex", alignItems:"center", flexDirection:"column", mt:5, minHeight:"70.9vh"}}>
      <Typography color="white  " variant="h2">Task Master</Typography>

      <Box sx={{display:"flex", flexDirection: 'column', maxWidth:"300px", mt:10}}>
        <TextField onChange={(e) => inputUpdate(e.target.value)} label="Text"
        ></TextField>
        <Button onClick={() => arrayUpdate()} variant="contained" sx={{ mt: 2 }}>Add</Button>
      </Box>

      <List sx={{ mt: 5 , display:"flex", alignItems:"center", flexDirection:"Column",color:"white"}}>
        {items.map((item,index) => {
          return (
            <ListItem sx={{border:"1px solid white", borderRadius:"20px;",width:"800px", m:1}} key={index}><ListItemText primary={item}></ListItemText><ListItemButton sx={{borderRadius:"20px",border:"1px solid white",maxWidth:"80px"}} onClick={() => remove(index)}>Delete</ListItemButton></ListItem>
          );
        })}
      </List>
    </Container>
  );
};

export default Adder;
