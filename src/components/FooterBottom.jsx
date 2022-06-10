import { Box, Grid, Image, Heading, Button, Container, Link, Icon ,Menu , MenuItem ,MenuButton ,MenuList } from "@chakra-ui/react";
import Cone from '../images/desktop/image-gallery-cone.jpg';
import Milkbottles from '../images/desktop/image-gallery-milkbottles.jpg';
import Orange from '../images/desktop/image-gallery-orange.jpg';
import Sugarcubes from '../images/desktop/image-gallery-sugarcubes.jpg';
import { BsInstagram } from 'react-icons/bs'
import {GrFacebook} from 'react-icons/gr'
import { BsTwitter } from 'react-icons/bs'
import { BsPinterest } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi';

function FooterBottom() {
  return (
    <>
      <Box marginTop="20">
        <Grid templateColumns={['repeat(2,1fr)','repeat(2,1fr)','repeat(2,1fr)','repeat(4,1fr)']}>
          <Image src={Milkbottles} />
          <Image src={Orange} />
          <Image src={Cone} />
          <Image src={Sugarcubes} />
        </Grid>

        <Box align="center" color="green.800" background="green.200" paddingY="10" fontWeight="bold">
          <Heading as="h2" size="md" maxWidth="bold
          ">sunnyside</Heading>
          <Container maxWidth="container.md" gap="6" marginTop="6">
            <Grid templateColumns="repeat(3,1fr)">
              <Button variant="link" _hover={{ color: "white" }}>About</Button>
              <Button variant="link" _hover={{ color: "white" }}>Services</Button>
              <Button variant="link" _hover={{ color: "white" }}>Projects</Button>
            </Grid>

            <Box display="flex" flexDirection="column" alignItems="center" marginTop="10">
              <Box display="flex" >
                <Link marginRight="7"><Icon width="30" as={GrFacebook} color='blue.800' _hover={{ color: 'white' }} /></Link>
                <Link marginRight="7"><Icon width="30" as={BsInstagram} color='blue.800' _hover={{ color: 'white' }} /></Link>
                <Link marginRight="7"><Icon width="30" as={BsTwitter} color='blue.800' _hover={{ color: 'white' }} /></Link>
                <Link marginRight="7"><Icon width="30" as={BsPinterest} color='blue.800' _hover={{ color: 'white' }} /></Link> 
              </Box>
            </Box>
            
          </Container>
        </Box>
      </Box>

    </>
  );
}

export default FooterBottom;
