import React, { useRef } from 'react';
import styles from './works.module.css';
import workData from '../src/api/work';
import WorkList from './worksList';

const Works = () => {
    const {title} = workData || {};
    const worksSection = useRef(null);
    return (
        <section ref={worksSection} className={styles.work}>
            <h1 className={styles.title}>{title}</h1>
            <ul className={styles.items}>
                <WorkList />
            </ul>
        </section>
    );
}

export default Works;