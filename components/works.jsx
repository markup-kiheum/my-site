import React from 'react';
import styles from './works.module.css';
import workData from '../src/api/work';
import WorkList from './worksList';

const Works = () => {
    const {title} = workData || {};
    return (
        <section className={styles.work}>
            <h1 className={styles.title}>{title}</h1>
            <ul className={styles.items}>
                <WorkList />
            </ul>
        </section>
    );
}

export default Works;