import { Typography } from "@mui/material"
import { Box, Container } from "@mui/system"

const Footer = () =>{
    return(
        <footer>
             <Container sx={{mt: 20}} maxWidth="lg">
                    <Typography variant="h4" color="white">Very Creative Footer</Typography>
                    <Typography variant="p" color="white"><br/>
                    Even more creative text with ads and all that good stuff.<br/><br/>
                    Owned and made by the "Programming God™ Bob Ross"
                    </Typography>
               </Container>
        </footer>
    )
}
export default Footer