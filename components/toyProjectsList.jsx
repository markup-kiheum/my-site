import React from 'react';
import Link from 'next/link';
import styles from './toyProjectsList.module.css';

const ToyProjectsList = () => {
    const toyProject = [
        {
            "id" : 1,
        },
        {
            "id" : 2,
        }
    ];

    return (
        <>
            {
                toyProject.map((item)=> {
                    // const {name, company, siteInfo, type, skills} = item || {}
                    return(
                        <li key={item.id} className={styles.item}>
                            <Link href="/">
                                <a className={styles.link}></a>
                            </Link>
                        </li>
                    )
                })
            }
        </>
    );
};

export default ToyProjectsList;