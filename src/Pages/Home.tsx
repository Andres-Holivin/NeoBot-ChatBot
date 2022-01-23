import { Image, Container, Grid, Heading } from '@chakra-ui/react';
import React from 'react';
import { Color } from './Variable';

const Home = () => {
  return(
    <Container justifyContent="center" alignItems="center" p="10px" display="flex" m="5%" bgColor={Color.Secondary} w="100%" borderRadius="20px">
        <Grid templateColumns="40% 60%" w="100%" alignItems="center">
            <Image src='https://res.cloudinary.com/holivin21/image/upload/v1642957490/NeoBot/Pngtree_artificial_intelligence_mobile_voice_assistant_6447013_sbghg3.png' boxSize="300px"/>
            <Heading as="h1">NeoBot</Heading>
        </Grid>
    </Container>
  );
};
export default Home;