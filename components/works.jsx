import React, { useRef, useEffect } from 'react';
import styles from './works.module.css';
import workData from '../src/api/work';
import WorkList from './worksList';
import { useResize } from '../utils/hooks/useResize';

const Works = ({offsetTopWorks}) => {
    const {title} = workData || {};
    const worksSection = useRef(null);
    const {resize} = useResize();
    useEffect(()=>{
        offsetTopWorks(worksSection.current.offsetTop);
    }, [resize]);
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