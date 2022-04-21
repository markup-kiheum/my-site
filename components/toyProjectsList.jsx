import React from 'react';
import Link from 'next/link';
import styles from './toyProjectsList.module.css';

const ToyProjectsList = () => {
  const toyProject = [
    {
      'name' : 'Youtube Clone Coding',
    }
  ];

  return (
    <>
      {
        toyProject.map((item)=> {
          // const {name, company, siteInfo, type, skills} = item || {}
          return(
            <li key={item.name} className={styles.item}>
              <Link href="/toyProjects/youtube">
                <a className={styles.link}>Youtube Clone Coding</a>
              </Link>
            </li>
          )
        })
      }
    </>
  );
};

export default ToyProjectsList;