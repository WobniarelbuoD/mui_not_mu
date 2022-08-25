import React from "react";
import {Typography,AppBar,Card,CardActions,CardContent,CardMedia,CssBaseline,Grid,Toolbar,Container,IconButton,Button, Menu, MenuItem, useMediaQuery} from "@mui/material";
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';
import { Stack } from "@mui/system";
import { Link } from "react-router-dom";
import { useTheme } from '@mui/material/styles';

const TopBar = () =>{
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

  return(
    <>
      <CssBaseline /> 
      <AppBar position="relative">
        <Toolbar>
          <IconButton to="/" component={Link}><AccessibleForwardIcon size="large" edge="start" color="inherit" aria-label="logo" /></IconButton>
          <Typography variant="h5" component="div"></Typography>

          {matches && <Button sx={{color:"white"}} id="basic-button" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}>Menu</Button>}
      <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{'aria-labelledby': 'basic-button',}}>
            <MenuItem onClick={handleClose}><Button color="inherit" to="/" component={Link}>Home</Button></MenuItem>
            <MenuItem onClick={handleClose}><Button color="inherit" to="/calculator" component={Link}>Calculator</Button></MenuItem>
            <MenuItem onClick={handleClose}><Button color="inherit" to="/about" component={Link}>About</Button></MenuItem>
            <MenuItem onClick={handleClose}><Button color="inherit" to="/Adder" component={Link}>Adder</Button></MenuItem>
      </Menu>

          {!matches &&<Stack id="buttonLinks" direction="row" spacing={2}>
            <Button color="inherit" to="/" component={Link}>Home</Button>
            <Button color="inherit" to="/calculator" component={Link}>Calculator</Button>
            <Button color="inherit" to="/about" component={Link}>About</Button>
            <Button color="inherit" to="/Adder" component={Link}>Adder</Button>
          </Stack>}
        </Toolbar>
      </AppBar> 
    </>
  )
}

export default TopBar;
