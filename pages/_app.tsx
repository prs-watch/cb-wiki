import "../styles/globals.css"
import { AppProps } from "next/app"
import theme from "./_theme"
import { Box, Center, ChakraProvider, Divider, Grid, GridItem, Heading, List, Text } from "@chakra-ui/react";

function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <header>
                <Heading as="h1" size="2xl" color="red">中國棒球維基</Heading>
                <Text fontSize="md">
                    Collection of articles about Chinese Baseball.
                </Text>
            </header>
            <Grid templateColumns="repeat(5, 1fr)">
                <GridItem colSpan={1}>
                    <p>hoge</p>
                </GridItem>
                <GridItem colSpan={1}>
                    <Center height="100%">
                        <Divider orientation="vertical" />
                    </Center>
                </GridItem>
                <GridItem colSpan={3}>
                    <Component {...pageProps} />
                </GridItem>
            </Grid>
            <footer>
                <Box bg="red" h="30px">
                    <Text fontSize="sm" color="white">
                        Copyright ©️ 2022 hctaw_srp All Rights Reserved.
                    </Text>
                </Box>
            </footer>
        </ChakraProvider>
    )
}

export default App
