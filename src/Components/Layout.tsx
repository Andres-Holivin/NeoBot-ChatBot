import { Container } from '@chakra-ui/react';
import React, { PropsWithChildren } from 'react';
import { Color } from '../Pages/Variable';

type Props = PropsWithChildren<{}>;

const Layout = ({children}: Props) => {
  return (
    <Container 
        minH="100vh"
        minW="100vw"
        display="flex"
        bgColor={Color.Primary}
        textColor={Color.White}
        >
            {children}    
    </Container>
  );
};
export default Layout;
