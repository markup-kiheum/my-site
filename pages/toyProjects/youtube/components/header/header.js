import { useRef, memo } from 'react';
import styles from './header.module.css';

const Header = memo(
    ({ onSearch, onHomeClick }) => {
        const inputRef = useRef();
        
        const handleSearch = () => {
            const value = inputRef.current.value;
            onSearch(value);
        };

        const onClick = () => {
            handleSearch();
        };

        const onKeyPress = event => {
            if (event.key === 'Enter') {
                handleSearch();
            }
        };
        
        return (
            <header className={styles.header}>
                <div className={styles.inner}>
                    <h1 className={styles.logo} onClick={onHomeClick}>
                        <img className={styles.logoImg} src="/assets/youtube_logo.png" alt="youtube" />
                        <span className={styles.logoName}>Youtube</span>
                    </h1>
                    <div className={styles.searchBox}>
                        <input 
                            ref={inputRef}
                            className={styles.search}
                            type="search"
                            placeholder="검색해주세요."
                            onKeyPress={onKeyPress}
                        />
                        <button
                            className={styles.submit}
                            type="submit"
                            onClick={onClick}
                        >
                            <img className={styles.submitImg} src="/assets/search.png" alt="search" />
                        </button>
                    </div>
                </div>
            </header>
        );        
    }
);

export default Header;