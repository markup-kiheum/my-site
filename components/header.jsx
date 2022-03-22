import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './header.module.css';

const Header = ({ headerActiveIndex, onClickNavHandler }) => {
    const [clickActive, setClickActive] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(false);
    const navMenuList = ["Home", "About", "Works", "ToyProjects"];
    const ACTIVE_CLASS = clickActive ? styles.active : "";
    const FIXED_CLASS = scrollPosition ? styles.fixed : "";
    const handleFold = event => {
        event.preventDefault();
        setClickActive((current) => !current);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY || document.documentElement.scrollTop);
            if (!scrollPosition && window.scrollY > 10) {
                setScrollPosition(true);
            } else if (scrollPosition && window.scrollY <= 10) {
                setScrollPosition(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [scrollPosition]);

    function onClickNav(e){
        const target = e.target.innerHTML;
        const targetIndex = navMenuList.indexOf(target); 
        onClickNavHandler(targetIndex);
    };

    const renderNavList = () => {
        return (
            navMenuList.map((item, index) => {
                const navActiveClass = (headerActiveIndex === index) ? styles.active : "";
                return (
                    <button key={`nav_${index}`} onClick={onClickNav} className={`${styles.menu} ${navActiveClass}`}>{item}</button>
                )
            })
        )
    };

    return(
        <header className={`${styles.header} ${FIXED_CLASS}`}>
            <h1 className={styles.logo}>KH</h1>
            <nav className={`${styles.nav} ${ACTIVE_CLASS}`}>
                {renderNavList()}
            </nav>
            <button className={styles.foldButton} onClick={handleFold}>
                <span className={`${styles.top} ${ACTIVE_CLASS}`}></span>
                <span className={`${styles.mid} ${ACTIVE_CLASS}`}></span>
                <span className={`${styles.bot} ${ACTIVE_CLASS}`}></span>
            </button>
        </header>
    )
}

export default Header;