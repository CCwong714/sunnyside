import { Box, Button, Container, Heading, Image, IconButton, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import Arrow from '../images/icon-arrow-down.svg';
import imageHeaderPC from '../images/desktop/image-header.jpg';
import imageHeaderPH from '../images/mobile/image-header.jpg';
import BurgerMenu from '../components/BurgerMenu';
import { GiHamburgerMenu } from 'react-icons/gi';


function Banner() {

  return (
    <>
      {/* <Box
      position="absolute"
      top="0"
      bottom="0"
      right="0"
      left="0"
      height="100vh"
      zIndex={-1}
      >
        <Image width="100%" margin="auto" src={imageHeader}/>
      </Box> */}
      <Box
        backgroundImage={[`url(${imageHeaderPC})`, `url(${imageHeaderPC})`, `url(${imageHeaderPH})`, `url(${imageHeaderPC})`]}


        backgroundPosition="Bottom"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        height={['80vh', '80vh', '80vh', '110vh']}
        padding="5"
      >
        <header >
          <Box display="flex" alignItems="center" justifyContent="space-between" marginLeft={6} marginRight={6} marginTop={5} >

            <Box fontWeight="bold" color="White" fontSize="2xl"> sunnyside </Box>

            <Box display={['none', 'none', 'none', 'block']}>

              <Button
                marginRight={10}
                fontSize="xl"
                variant="link"
                color="white"
                _hover={{ backgroundColor: "blue.200" }}
                padding="5 5 5 5"
                borderRadius="3xl"
              >
                About
              </Button>
              <Button marginRight={10}
                fontSize="xl"
                variant="link"
                color="white"
                _hover={{ backgroundColor: "blue.200" }}
                padding="5 5 5 5"
                borderRadius="3xl"
              >
                Services
              </Button>
              <Button marginRight={10}
                fontSize="xl"
                variant="link"
                color="white"
                _hover={{ backgroundColor: "blue.200" }}
                padding="5 5 5 5"
                borderRadius="3xl"
              >
                Projects
              </Button>
              <Button marginRight={10}
                fontSize="xl"
                variant="link"
                color="white"
                _hover={{ backgroundColor: "blue.200" }}
                padding="5 5 5 5"
                borderRadius="3xl"
              >
                CONTACT
              </Button>
            </Box>
            <Box display={['block', 'block', 'block', 'none']}>
              <Menu >
                <MenuButton
                  as={IconButton}
                  icon={<GiHamburgerMenu color='white' />}
                  aria-label='Options'
                  variant="outline"
                />
                <MenuList>
                  <MenuItem>About</MenuItem>
                  <MenuItem>Services</MenuItem>
                  <MenuItem>Project</MenuItem>
                  <MenuItem>CONTANT</MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Box>

        </header>

        {/* Title */}

        <Box>
          <Container maxWidth="container.xl" marginY="30">
            <Heading
              align="center"
              fontSize={[50, 50, 50, 80]}
              marginTop={[18, 18, 18, 40]}
              color="white"
            >
              WE ARE CREATIVES
            </Heading>
            <Box align="center"
              marginTop={[2, 4, 20, 28]}
            >
              <Image width={["30px", "30px", "55px", "55px"]} src={Arrow} />
            </Box>
          </Container>
        </Box>
      </Box>

    </>
  );
}

export default Banner;

