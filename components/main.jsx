import React, { Component, useState } from 'react';
import Typed from 'react-typed';
import styles from './main.module.css';

const Main = () => {
    const textLines = [
        `Web Publisher`,
        `Front End Developer`
    ];
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>
                <Typed 
                    strings={textLines}
                    typeSpeed={60}
                    backSpeed={50}
                    smartBackspace={true}
                    showCursor={false}
                /> 
            </h1>
        </main>
    );
}

export default Main;