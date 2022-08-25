import { styled, Typography } from "@mui/material";
import { Container } from "@mui/system";

const About = () => {
  const Responsive = styled("div")(({theme})=>({
    [theme.breakpoints.down('sm')]: {
      fontSize:"0.5em",
    }
  }))
  return (
    <main>
      <div>
        <Container sx={{minHeight:"70.9vh", pt:5}}>
          <Typography variant="h2" color="white" align="center" gutterBottom>
            About
          </Typography>
          <Responsive>
          <Typography sx={{fontSize:"2em"}} variant="p" color="white" align="center">
            The time has come to write some random text that has no meaning.
            This text is only for show and you shouldn't read into it or read it
            in general. About sounds like A Boot which would translate into a
            shoe. Personaly to me it sounds weird.<br/><br/>
            This is an asignment or an exercise that we have to complete and for that reason i need to spam some text.
            I do not like Lorem, but i do like typing alot of random text for no reason what so ever.<br/>
            What if i told you the cake was a lie?
          </Typography>
          </Responsive>
          
        </Container>
      </div>
    </main>
  );
};
export default About;
