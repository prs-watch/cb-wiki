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
import Head from 'next/head';
import NextLink from 'next/link';
import { BsGithub, BsTwitter } from 'react-icons/bs';

import theme from '../theme/theme';

// Next.jsのApp
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>中國棒球維基</title>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicons/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicons/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicons/favicon-16x16.png'
        />
        <link rel='manifest' href='/favicons/site.webmanifest' />
        <link
          rel='mask-icon'
          href='/favicons/safari-pinned-tab.svg'
          color='#000000'
        />
        <link rel='shortcut icon' href='/favicons/favicon.ico' />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta
          name='msapplication-config'
          content='/favicons/browserconfig.xml'
        />
        <meta name='theme-color' content='#ffffff' />
      </Head>
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
