// components/Navbar.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import styles from '/src/app/Navbar.module.css';

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/" passHref>
            <div
              onClick={() => handleLinkClick('/')}
              className={`${styles.navItemDiv} ${activeLink === '/' ? styles.active : ''}`}
            >
              Home
            </div>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/experience" passHref>
            <div
              onClick={() => handleLinkClick('/experience')}
              className={`${styles.navItemDiv} ${activeLink === '/experience' ? styles.active : ''}`}
            >
              Experience
            </div>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/portfolio" passHref>
            <div
              onClick={() => handleLinkClick('/portfolio')}
              className={`${styles.navItemDiv} ${activeLink === '/portfolio' ? styles.active : ''}`}
            >
              Portfolio
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
