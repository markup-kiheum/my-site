import React, { useState } from 'react';
import styles from './header.module.css';

const Header = () => {
    const [clickActive, setClickActive] = useState(false);
    const ACTIVE_CLASS = clickActive ? 'active' : '';
    const handleFold = event => {
        event.preventDefault();
        setClickActive((current) => !current);
    }

    return(
        <header className={styles.header}>
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