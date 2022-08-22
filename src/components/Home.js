import { Typography } from "@mui/material"
import { Container } from "@mui/system"

const Home = () =>{
    return(
<main>
    <div>
        <Container sx={{minHeight:"70.9vh"}}>
            <Typography variant="h1" color="textPrimary" align="center" gutterBottom>Home</Typography>
            <Typography sx={{mb: 5}} variant="h4" color="white" align="center">Dancing hamsters of infinite annihilation</Typography>
            <a href="https://www.youtube.com/watch?v=p3G5IXn0K7A" target="_blank" align="center"><img width="70%" src="https://c.tenor.com/1o2G0Ib1BfUAAAAC/hamster-dance.gif" alt="Hamster Dance"/></a>
        </Container>
    </div>
</main>
    )
}

export default Home