import VideoItem from '../videoItem/videoItem';
import styles from './videoList.module.css';

const VideoList = ({ videos, display, onVideoClick }) => {
    return (
        <ul className={styles.list}>
            {videos.map(video => (
                <VideoItem
                    key={video.id}
                    video={video}
                    onVideoClick={onVideoClick}
                    display={display}
                />
            ))}
        </ul>
    )
};

export default VideoList;