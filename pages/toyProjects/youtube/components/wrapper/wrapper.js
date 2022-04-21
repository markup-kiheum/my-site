import { useState, useEffect, useCallback } from 'react';
import Header from '../header/header';
import VideoDetail from '../videoDetail/videoDetail';
import VideoList from '../videoList/videoList';
import styles from './styles.module.css';

const Wrapper = ({ youtube }) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = useCallback((video) => {
    setSelectedVideo(video);
  }, []);

  const search = useCallback(
    query => {
    setSelectedVideo(null);
    youtube
    .search(query)
    .then(videos => setVideos(videos));
  }, [youtube]);

  const pathHome = () => {
    setSelectedVideo(null);
    youtube
    .search('아이유')
    .then(videos => setVideos(videos))
  };

  useEffect(() => {
    youtube
    .search('아이유')
    .then(videos => setVideos(videos));
  }, []);

  console.log(videos);

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <Header onSearch={search} onHomeClick={pathHome} />
        <section className={styles.section}>
          {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
          )}
          <div className={styles.list}>
            <VideoList
              videos={videos}
              onVideoClick={selectVideo}
              display={selectedVideo ? 'list' : 'grid'}
            />
          </div>
        </section>
      </div>
    </div>
  )
};

export default Wrapper;