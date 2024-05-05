import React from 'react';
import Link from 'next/link';
import styles from '/src/app/styles/Navbar.module.css';

const Navbar: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav>
      <ul className={styles.navList}>
        <li className={styles.navItem} onClick={() => scrollToSection('headline')}>
          <div className={styles.loudFont}>Home</div>
        </li>
        <li className={styles.navItem} onClick={() => scrollToSection('Projects')}>
          <div className={styles.loudFont}>Projects</div>
        </li>
        <li className={styles.navItem} onClick={() => window.open('/Resume.pdf', '_blank')}>
          <div className={styles.loudFont}>Resume</div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
