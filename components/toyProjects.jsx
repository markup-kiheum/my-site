import React, { useRef } from 'react';
import styles from './toyProjects.module.css';
import ToyProjectsList from './toyProjectsList';

const ToyProjects = () => {
    const toySection = useRef(null);
    return (
        <section ref={toySection} className={styles.toyProjects}>
            <h1 className={styles.title}>노력의 결과</h1>
            <ul className={styles.items}>
                <ToyProjectsList />
            </ul>
        </section>
    );     
};

export default ToyProjects;