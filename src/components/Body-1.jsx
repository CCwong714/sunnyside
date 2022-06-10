import { Box, Container, Heading, Button, Grid, Image } from "@chakra-ui/react";
import EggPC from '../images/desktop/image-transform.jpg'
import EggPH from '../images/mobile/image-transform.jpg'
import cherryPC from '../images/desktop/image-graphic-design.jpg'
import cherryPH from '../images/mobile/image-graphic-design.jpg'
import orangePC from '../images/desktop/image-photography.jpg'
import orangePH from '../images/mobile/image-photography.jpg'
import GlassPC from '../images/desktop/image-stand-out.jpg'
import GlassPH from '../images/mobile/image-stand-out.jpg'

function Body1() {
  return (
    <Box fontFamily="Sans-Serif">
      <Box >
        <Grid templateColumns={['repeat(1,1fr)', 'repeat(1,1fr)', 'repeat(1,1fr)', 'repeat(2,1fr)']}>
          <Box paddingY="25%" paddingLeft="27%" paddingRight="15%" display={['none', 'none', 'none', 'block']}>
            <Heading as="h1" size="4xl" marginBottom="5" align="left">
              Transform your brand
            </Heading>
            <Box display="flex"
              align="left"
              as="h3"
              size="lg"
              paddingTop="7"
            >
              We are a full-setvice creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you .
            </Box>
            <Button color="black" marginTop="10%" fontWeight="bold" variant="link" boxShadow=" 0 6px 20px 0 rgba(255,240,0,1)"  borderRadius="0 0 50% 50%">LEARN MORE</Button>
          </Box>

          <Box>
            <Box
              backgroundImage={[`url(${EggPH})`, `url(${EggPH})`, `url(${EggPH})`, `url(${EggPC})`]}
              backgroundPosition="top"
              backgroundRepeat="no-repeat"
              backgroundSize='cover'
              height={['80vh', '80vh', '80vh', '100vh']}
            >
            </Box>
          </Box>

          <Box paddingY="25%" paddingLeft="15%" paddingRight="27%" display={['block', 'block', 'block', 'none']}>
            <Heading as="h1" size="4xl" marginBottom="5" align="left" >
              Transform your brand
            </Heading>
            <Box display="flex"
              align="left"
              as="h3"
              size="lg"
              paddingTop="7"
            >
              We are a full-setvice creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you .
            </Box>
            <Button color="black" marginTop="10%" fontWeight="bold" variant="link" boxShadow=" 0 6px 20px 0 rgba(255,240,0,1)"  borderRadius="0 0 50% 50%">LEARN MORE</Button>
          </Box>
        </Grid>
      </Box>

      <Box>
        <Grid templateColumns={['repeat(1,1fr)', 'repeat(1,1fr)', 'repeat(1,1fr)', 'repeat(2,1fr)']}>

          <Box>
            <Box
                backgroundImage={[`url(${GlassPH})`, `url(${GlassPH})`, `url(${GlassPH})`, `url(${GlassPC})`]}
                backgroundPosition="top"
                backgroundRepeat="no-repeat"
                backgroundSize='cover'
                height={['80vh', '80vh', '80vh', '100vh']}
             
              >
            </Box>
          </Box>

          <Box paddingY="25%" paddingLeft="15%" paddingRight="27%">
            <Heading as="h1" size="4xl" marginBottom="5" align="left">
              Stand out to the right audience
            </Heading>
            <Box display="flex"
              align="left"
              as="h3"
              size="lg"
              paddingTop="7"
            >
              Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters. We'll bulid and extend your brand in digital places.
            </Box>
            <Button color="black" marginTop="10%" fontWeight="bold" variant="link" boxShadow=" 0 6px 20px 0 rgba(255,240,0,1)"  borderRadius="0 0 50% 50%">LEARN MORE</Button>
          </Box>
        </Grid>
      </Box>

      <Box>
        <Grid templateColumns={['repeat(1,1fr)', 'repeat(1,1fr)', 'repeat(1,1fr)', 'repeat(2,1fr)']}>
          <Box
            backgroundImage={[`url(${cherryPH})`, `url(${cherryPH})`, `url(${cherryPH})`, `url(${cherryPC})`]}
            backgroundPosition="top"
            backgroundRepeat="no-repeat"
            backgroundSize='cover'
            height={['110vh', '110vh', '110vh', '100vh']}
            padding="5"
          >
            <Box marginTop={["90%", "90%", "90%", "70%"]} marginX="30%" color="green.800">
              <Heading as="h1" size="xl" marginBottom="5" align="center">Graphic Design</Heading>
              <Box display="flex" align="center" as="h3" size="md" fontWeight="bold">
                Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.
              </Box>
            </Box>
          </Box>

          <Box
            backgroundImage={[`url(${orangePH})`, `url(${orangePH})`, `url(${orangePH})`, `url(${orangePC})`]}
            backgroundPosition="top"
            backgroundRepeat="no-repeat"
            backgroundSize='cover'
            height={['110vh', '110vh', '110vh', '100vh']}
            padding="5"
          >
            <Box marginTop={["100%", "100%", "100%", "70%"]} marginX="30%" color="blue.900">
              <Heading as="h1" size="xl" marginBottom="5" align="center">Photography</Heading>
              <Box display="flex" align="center" as="h3" size="md" fontWeight="bold">
                Increase your credibility by getting the most stunning, high-quality photos that improve you business image.
              </Box>
            </Box>
          </Box>

        </Grid>
      </Box>



    </Box>
  );
}

export default Body1;
