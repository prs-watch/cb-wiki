import '../styles/globals.css';
import { AppProps } from 'next/app';
import theme from '../theme/theme';
import {
  Box,
  ChakraProvider,
  Heading,
  LinkBox,
  LinkOverlay,
  Text,
} from '@chakra-ui/react';
import NextLink from 'next/link'

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <header>
        <LinkBox>
          <NextLink href='/' passHref>
            <LinkOverlay>
              <Heading as='h1' size='2xl' color='red'>
                中國棒球維基
              </Heading>
              <Text fontSize='md'>
                Collection of articles about Chinese Baseball.
              </Text>
            </LinkOverlay>
          </NextLink>
        </LinkBox>
      </header>
      <Component {...pageProps} />
      <footer>
        <Box bg='red' h='30px'>
          <Text fontSize='sm' color='white'>
            Copyright ©️ 2022 hctaw_srp All Rights Reserved.
          </Text>
        </Box>
      </footer>
    </ChakraProvider >
  );
}

export default App;
