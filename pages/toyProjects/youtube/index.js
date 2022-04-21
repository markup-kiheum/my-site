import Youtube from './service/youtube';
import Wrapper from './components/wrapper/wrapper';

const Home = () => {
  const youtube = new Youtube(process.env.NEXT_PUBLIC_YOUTUBE_KEY);
  
  return (
    <Wrapper youtube={youtube} />
  )
}

export default Home;
