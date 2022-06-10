import { Box ,Image } from '@chakra-ui/react';
import Banner from './components/Banner';
import Body1 from './components/Body-1';
import Testimonials from './components/Testimonials';
import FooterBottom from './components/FooterBottom';

function App() {
  return (
    <>
      <Box>
        <Banner/>
        <Body1/>
        <Testimonials/>
        <FooterBottom/>
      </Box>
    </>
  );
}

export default App;
