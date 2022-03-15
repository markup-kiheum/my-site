import React, { Component } from 'react';
import styles from './abouts.module.css';
import profileData from '../src/api/profile';

const About = () => {
    const {title, listTitle, profileTitle, profileList, description} = profileData || {};
    const imgURL = "/assets/my-photo.jpg";
    return (
        <section className={styles.about}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.container}>
                <img className={styles.photo} src={imgURL} alt="Kiheum Photo" />
                <div className={styles.info}>
                    <p className={styles.text}>{description}</p>
                    <ul className={styles.items}>
                        <li className={styles.item}>
                            <h2 className={styles.itemTitle}>{listTitle.name[0]}</h2>
                            <div className={styles.profileContainer}>
                                <p className={styles.profileTitle}>{profileTitle.name}</p>
                                <p className={styles.profileText}>{profileList.name}</p>
                            </div>
                            <div className={styles.profileContainer}>
                                <p className={styles.profileTitle}>{profileTitle.birth}</p>
                                <p className={styles.profileText}>{profileList.birth}</p>
                            </div>
                            <div className={styles.profileContainer}>
                                <p className={styles.profileTitle}>{profileTitle.eMail}</p>
                                <a href="mailto:markup.kiheum@gmail.com" className={styles.profileText}>{profileList.eMail}</a>
                            </div>
                        </li>
                        <li className={styles.item}>
                            <h2 className={styles.itemTitle}>{listTitle.name[1]}</h2>
                            <div className={styles.profileContainer}>
                                <p className={styles.profileTitle}>{profileTitle.company[0]}</p>
                                <p className={styles.profileText}>{profileList.companyDate[0]}</p>
                            </div>
                            <div className={styles.profileContainer}>
                                <p className={styles.profileTitle}>{profileTitle.company[1]}</p>
                                <p className={styles.profileText}>{profileList.companyDate[1]}</p>
                            </div>
                            <div className={styles.profileContainer}>
                                <p className={styles.profileTitle}>{profileTitle.company[2]}</p>
                                <p className={styles.profileText}>{profileList.companyDate[2]}</p>
                            </div>
                            <div className={styles.profileContainer}>
                                <p className={styles.profileTitle}>{profileTitle.company[3]}</p>
                                <p className={styles.profileText}>{profileList.companyDate[3]}</p>
                            </div>
                        </li>
                        <li className={styles.item}>
                            <h2 className={styles.itemTitle}>{listTitle.name[2]}</h2>
                            <p className={styles.profileText}>{profileList.skills}</p>
                            <p className={styles.profileText}>{profileList.tools}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default About;