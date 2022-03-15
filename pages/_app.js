import { Component } from 'react';
import Head from 'next/head';
import "../styles/global.css"

const App = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>KH | Front End Developer</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
                <meta name="keyword" content="kiheum, kiheum portfolio, kiheum site, kiheum blog, KH Coding" />
                <meta name="description" content="프론트 엔드 개발자를 향한 새로운 도전의 시작" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default App;