import { Typography } from "@mui/material"
import { Box, Container } from "@mui/system"

const Footer = () =>{
    return(
        <footer sx={{position:"absolute",left:0,bottom:0,right:0}}>
            <Box sx={{background: "linear-gradient(0deg, rgba(253,219,45,1) 0%, rgba(173,97,97,1) 52%, rgba(34,116,195,1) 100%)", mt:10}}>
             <Container sx={{padding:5}} maxWidth="lg">
                    <Typography variant="h4" color="white">Very Creative Footer</Typography>
                    <Typography variant="p" color="white"><br/>
                    Even more creative text with ads and all that good stuff.<br/><br/>
                    Owned and made by the "Programming God™ Bob Ross"
                    </Typography>
               </Container>
            </Box>
        </footer>
    )
}
export default Footer