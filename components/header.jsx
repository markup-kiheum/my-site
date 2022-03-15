import React, { useEffect, useState } from 'react';
import styles from './header.module.css';

const Header = () => {
    const [clickActive, setClickActive] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(false);
    const ACTIVE_CLASS = clickActive ? "active" : "";
    const FIXED_CLASS = scrollPosition ? styles.fixed : "";
    const handleFold = event => {
        event.preventDefault();
        setClickActive((current) => !current);
    }
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

    return(
        <header className={`${styles.header} ${FIXED_CLASS}`}>
            <h1 className={styles.logo}>KH</h1>
            <nav className={styles.nav}>
                <a href="#" className={styles.menu}>About</a>
                <a href="#" className={styles.menu}>Work</a>
                <a href="#" className={styles.menu}>ToyProject</a>
            </nav>
            <a href="#" className={styles.foldButton} onClick={handleFold}>
                <span className={`${styles.top} ${ACTIVE_CLASS}`}></span>
                <span className={`${styles.mid} ${ACTIVE_CLASS}`}></span>
                <span className={`${styles.bot} ${ACTIVE_CLASS}`}></span>
            </a>
            <nav className={styles.foldNav}>
                <a href="#" className={styles.foldMenu}>About</a>
                <a href="#" className={styles.foldMenu}>Work</a>
                <a href="#" className={styles.foldMenu}>ToyProject</a>
            </nav>
        </header>
    )
}

export default Header;