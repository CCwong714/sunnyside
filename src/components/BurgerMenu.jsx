import { Box ,Image} from "@chakra-ui/react";
import { GiHamburgerMenu } from 'react-icons/gi';

function Burger() {
  return ( 
    <>
      <Box>
        <Box>
          <Image src={GiHamburgerMenu}/>
        </Box>
      </Box>
    </>
   );
}

export default Burger;
