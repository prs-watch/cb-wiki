import '../styles/globals.css';
import {
  Box,
  ChakraProvider,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  Link,
  Text,
} from '@chakra-ui/react';
import { AppProps } from 'next/app';
import NextLink from 'next/link';
import { BsGithub, BsTwitter } from 'react-icons/bs';
import '../node_modules/github-markdown-css/github-markdown.css';

import theme from '../theme/theme';

// Next.jsのApp
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <div id='main'>
        <header>
          <Grid bg='red.500' templateColumns='repeat(10, 1fr)'>
            <GridItem colSpan={9} px={50}>
              <Heading as='h1' size='2xl' color='white'>
                <NextLink href='/' passHref>
                  中國棒球維基
                </NextLink>
              </Heading>
              <Text fontSize='md' color='white'>
                Collection of articles about Chinese Baseball
              </Text>
            </GridItem>
            <GridItem colSpan={1}>
              <HStack h='100%' spacing={10} align='center'>
                <Link href='https://twitter.com/hctaw_srp' isExternal>
                  <Icon as={BsTwitter} boxSize={10} color='white' />
                </Link>
                <Link href='https://github.com/prs-watch/cb-wiki' isExternal>
                  <Icon as={BsGithub} boxSize={10} color='white' />
                </Link>
              </HStack>
            </GridItem>
          </Grid>
        </header>
        <Component {...pageProps} />
        <footer>
          <Box h='30px'>
            <Text fontSize='sm'>
              Copyright ©️ 2022 hctaw_srp All Rights Reserved.
            </Text>
          </Box>
        </footer>
      </div>
    </ChakraProvider>
  );
};

export default App;
