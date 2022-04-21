import { memo } from 'react';
import styles from './videoItem.module.css';

const VideoItem = memo(
    ({ video, video: { snippet }, display, onVideoClick }) => {
        const displayType = display === 'list' ? styles.list : styles.grid;
        return (
            <li className={`${styles.item} ${displayType}`} onClick={() => onVideoClick(video)}>
                <div className={styles.video}>
                    <img 
                        className={styles.thumbnail}
                        src={snippet.thumbnails.medium.url}
                        alt={snippet.channelTitle}
                    />
                    <div className={styles.info}>
                        <h1 className={styles.title}>{snippet.title}</h1>
                        <p className={styles.channel}>{snippet.channelTitle}</p>
                    </div>
                </div>
            </li>
        );
    }
);

export default VideoItem;