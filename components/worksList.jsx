import React, { Component } from 'react';
import Image from 'next/image';
import Link from 'next/link'
import styles from './worksList.module.css';

const WorksList = () => {
    const workInfo = [
        {
            "id" : 0,
            "imgURL" : "/assets/kakaoVX.jpg",
            "name" : "kakaoVX",
            "company" : "kakaoVX",
            "siteInfo" : "홈페이지 리뉴얼 제작",
            "type" : "Responsive Web",
            "skills" : "Markup / CSS / JS / jQuery"
        },
        {
            "id" : 1,
            "imgURL" : "/assets/friendsacademy.jpg",
            "name" : "Friends Academy",
            "company": "kakaoVX",
            "siteInfo" : "홈페이지 제작",
            "type" : "Responsive Web",
            "skills" : "Markup / CSS / JS / jQuery"
        },
        {
            "id" : 2,
            "imgURL" : "/assets/friendsscreen.jpg",
            "name" : "Friends Screen",
            "company": "kakaoVX",
            "siteInfo" : "홈페이지 제작",
            "type" : "Responsive Web",
            "skills" : "Markup / CSS / JS / jQuery"
        },
        {
            "id" : 3,
            "imgURL" : "/assets/wplanet.jpg",
            "name" : "시소펀딩",
            "company": "W-Planet",
            "siteInfo" : "홈페이지 리뉴얼 제작",
            "type" : "Responsive Web",
            "skills" : "Markup / CSS / JS / jQuery"
        },
        {
            "id" : 4,
            "imgURL" : "/assets/MEPLZ.jpg",
            "name" : "현대자동차 채용사이트",
            "company": "MEPLZ",
            "siteInfo" : "홈페이지 리뉴얼 제작",
            "type" : "Responsive Web",
            "skills" : "Markup / CSS / JS / jQuery"
        },
        {
            "id" : 5,
            "imgURL" : "/assets/view3.jpg",
            "name" : "제주몬트락",
            "company": "View3",
            "siteInfo" : "홈페이지 제작",
            "type" : "PC / Mobile Web",
            "skills" : "Markup / CSS"
        }
    ];
    return (
        <>
            {
                workInfo.map((item)=> {
                    const {name, company, siteInfo, type, skills} = item || {}
                    return(
                        <li key={item.id} className={styles.item}>
                            <Link href="https://www.naver.com/">
                                <a className={styles.imgContainer} target="_blank" rel="noopener noreferrer">
                                    <div className={styles.photo}>
                                        <Image 
                                            src={item.imgURL}
                                            alt="portfolio"
                                            layout="responsive"
                                            width={25}
                                            height={14}
                                        />
                                    </div>
                                </a>
                            </Link>
                            <h2 className={styles.name}>{item.name}</h2>
                            <p className={styles.info}>{item.company}</p>
                            <p className={styles.info}>{item.siteInfo}</p>
                            <p className={styles.info}>{item.type}</p>
                            <p className={styles.info}>{item.skills}</p>
                        </li>
                    )
                })
            }
        </>
    );
};

export default WorksList;