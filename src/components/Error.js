import { Box, Typography } from "@mui/material"
import { Container } from "@mui/system"
import fire from "./Source_Material/fire-15.gif"

const Error = () =>{
    return(
        <Box sx={{pb:"210px"}}>
        <img src={fire} alt="fire" style={{position:"absolute", zIndex:"-5",width:"99.2vw", height:"100vh",left:0,top:0}}/>
        <Container sx={{display:"flex",alignContent:"center", alignItems:"center", justifyContent:"center", minHeight:"70.9vh"}}>
            <Typography color="white" variant="h1">Error 404: Page Not Found</Typography>
        </Container>
        </Box>
    )
}
export default Error