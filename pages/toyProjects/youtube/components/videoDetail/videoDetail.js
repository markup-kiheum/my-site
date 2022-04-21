import styles from './videoDetail.module.css';

const VideoDetail = ({ video, video: {snippet} }) => {
    return (
        <section className={styles.detail}>
            <iframe
                className={styles.detailVideo}
                title="youtube video player"
                type="text/html"
                width="100%"
                height="500"
                src={`https://www.youtube.com/embed/${video.id}`}
                frameBorder="0"
                allowFullScreen
            >
            </iframe>
            <div className={styles.info}>
                <h1 className={styles.title}>{snippet.title}</h1>
                <h2 className={styles.channel}>{snippet.channelTitle}</h2>
                <pre className={styles.description}>{snippet.description}</pre>
            </div>
        </section>
    )
};

export default VideoDetail;