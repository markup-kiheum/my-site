import React, { Component } from 'react';
import Link from 'next/link'
import styles from './worksList.module.css';

const WorksList = () => {
    const workInfo = [
        {
            id: 0,
            siteURL: 'http://www.kakaovx.com/',
            imgURL: '/assets/kakaoVX.jpg',
            name: 'kakaoVX',
            company: 'kakaoVX',
            siteInfo: '홈페이지 리뉴얼 제작',
            type: 'Responsive Web',
            skills: 'Markup / CSS / JS / jQuery'
        },
        {
            id: 1,
            siteURL: 'https://www.friendsacademy.kr/',
            imgURL: '/assets/friendsacademy.jpg',
            name: 'Friends Academy',
            company: 'kakaoVX',
            siteInfo: '홈페이지 제작',
            type: 'Responsive Web',
            skills: 'Markup / CSS / JS / jQuery'
        },
        {
            id: 2,
            siteURL: 'https://www.friendsscreen.kr/',
            imgURL: '/assets/friendsscreen.jpg',
            name: 'Friends Screen',
            company: 'kakaoVX',
            siteInfo: '홈페이지 제작',
            type: 'Responsive Web',
            skills: 'Markup / CSS / JS / jQuery'
        },
        {
            id: 3,
            siteURL: 'https://c-so.co.kr/',
            imgURL: '/assets/wplanet.jpg',
            name: '시소펀딩',
            company: 'W-Planet',
            siteInfo: '홈페이지 리뉴얼 제작',
            type: 'Responsive Web',
            skills: 'Markup / CSS / JS / jQuery'
        },
        {
            id: 4,
            siteURL: 'http://recruit.hyundai.com/',
            imgURL: '/assets/MEPLZ.jpg',
            name: '현대자동차 채용사이트',
            company: 'MEPLZ',
            siteInfo: '홈페이지 리뉴얼 제작',
            type: 'Responsive Web',
            skills: 'Markup / CSS / JS / jQuery'
        },
        {
            id: 5,
            siteURL: 'http://www.jejumontrak.co.kr/',
            imgURL: '/assets/view3.jpg',
            name: '제주몬트락',
            company: 'View3',
            siteInfo: '홈페이지 제작',
            type: 'PC / Mobile Web',
            skills: 'Markup / CSS'
        }
    ];
    return (
        <>
            {
                workInfo.map((item)=> {
                    return(
                        <li key={item.id} className={styles.item}>
                            <Link href={{
                                pathname: item.siteURL
                            }}>
                                <a className={styles.imgContainer} target="_blank" rel="noopener noreferrer">
                                    <img className={styles.photo} src={item.imgURL} alr="portfolio" />
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