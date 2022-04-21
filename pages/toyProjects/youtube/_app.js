import Head from 'next/head';
import Youtube from '../service/youtube';
import '../styles/globals.css';

const App = ({ Component, pageProps }) => {
  const youtube = new Youtube(process.env.NEXT_PUBLIC_YOUTUBE_KEY);
  return (
    <>
      <Head>
        <title>WEMADE | Kiheum</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      </Head>
      <Component {...pageProps} youtube={youtube} />
    </>
  )
}

export default App;
