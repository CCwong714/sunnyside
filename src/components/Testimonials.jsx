import { Box ,Heading ,Grid , Image, Container} from "@chakra-ui/react";

import emily from '../images/image-emily.jpg';
import jennie from '../images/image-jennie.jpg';
import thomas from '../images/image-thomas.jpg';


function Testimonials() {
  return ( 
    <>
      <Container maxWidth="container.xl">
        <Heading paddingTop="20" align="center" as="h3" size="lg" color="gray.300" fontWeight="bold">CLIENT TESTIMONAILS</Heading>

        <Box marginTop="100" >
          <Grid templateColumns={['repeat(1,1fr)','repeat(1,1fr)','repeat(1,1fr)','repeat(3,1fr)']} gap={4} > 
            <Box align="center" >
              <Image w="20" borderRadius="100" src={emily}/>
              <Box marginTop="50" paddingX="10%">
                We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
              </Box>

              <Box marginTop="50px" fontWeight="bold"> Emily R. </Box>
              <Box marginTop="2" marginBottom={["10","10","10","2"]}> Marketing Director </Box>
            </Box>

            <Box align="center" >
              <Image w="20" borderRadius="100" src={thomas}/>
              <Box marginTop="50" paddingX="10%">
                Sunntside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.
              </Box>

              <Box marginTop="50px" fontWeight="bold"> Thomas S. </Box>
              <Box marginTop="2" marginBottom={["10","10","10","2"]}> Chief Operating Officer </Box>
            </Box>

            <Box align="center" >
              <Image w="20" borderRadius="100" src={jennie}/>
              <Box marginTop="50" paddingX="10%">
                Incredible end resuly! Our sales Increased over 400% when we worked with Sunnyside. Highly recommended! 
              </Box>

              <Box marginTop="50px" fontWeight="bold"> Jennie f.</Box>
              <Box marginTop="2" marginBottom={["10","10","10","2"]}> Business Owner </Box>
            </Box>

          </Grid>
        </Box>
      </Container>
    </>
   );
}

export default Testimonials;
