import React, { useRef, useEffect } from 'react';
import styles from './toyProjects.module.css';
import ToyProjectsList from './toyProjectsList';
import { useResize } from '../utils/hooks/useResize';

const ToyProjects = ({offsetTopToyProjects}) => {
    const toyProjectsSection = useRef(null);
    const {resize} = useResize();
    useEffect(()=>{
        offsetTopToyProjects(toyProjectsSection.current.offsetTop);
    }, [resize]);
    return (
        <section ref={toyProjectsSection} className={styles.toyProjects}>
            <h1 className={styles.title}>노력의 결과</h1>
            <ul className={styles.items}>
                <ToyProjectsList />
            </ul>
        </section>
    );     
};

export default ToyProjects;