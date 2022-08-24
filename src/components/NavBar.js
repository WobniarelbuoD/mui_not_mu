import {Typography,AppBar,Card,CardActions,CardContent,CardMedia,CssBaseline,Grid,Toolbar,Container,IconButton,Button} from "@mui/material";
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';
import { Stack } from "@mui/system";
import { Link } from "react-router-dom";

const TopBar = () =>{
  return(
    <>
      <CssBaseline /> 
      <AppBar position="relative">
        <Toolbar>
          <IconButton to="/" component={Link}><AccessibleForwardIcon size="large" edge="start" color="inherit" aria-label="logo" /></IconButton>
          <Typography variant="h5" component="div"></Typography>
          <Stack id="buttonLinks" direction="row" spacing={2}>
            <Button color="inherit" to="/" component={Link}>Home</Button>
            <Button color="inherit" to="/calculator" component={Link}>Calculator</Button>
            <Button color="inherit" to="/about" component={Link}>About</Button>
            <Button color="inherit" to="/Adder" component={Link}>Adder</Button>
          </Stack>
        </Toolbar>
      </AppBar> 
    </>
  )
}

export default TopBar;
