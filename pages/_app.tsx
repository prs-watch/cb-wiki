import '../styles/globals.css'
import { AppProps } from 'next/app'
import Head from 'next/head'

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>中國棒球維基</title>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default App
