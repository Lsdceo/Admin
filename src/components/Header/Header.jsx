import styles from './Header.module.css';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext.js';

export const Header = () => {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  
    return (
      <header className={styles.header}>
        <h1 className={styles.title}>Admin</h1>
        <button onClick={toggleTheme} className={styles.themeToggle}>
          {isDarkMode ? '☀️' : '🌙'}
        </button>
      </header>
    );
  };