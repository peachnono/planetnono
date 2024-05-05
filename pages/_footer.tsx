import React from 'react';
import styles from '/src/app/styles/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.babydollfont}>&copy; 2024 Nicole Hordejan</p>
        <div className={styles.footerLinks}>
            <p className={styles.babydollfont}>Lets make something awesome! Reach me at <a href='#'>nhordejan@gmail.com</a>

            </p>
              <a href='#'><img src="/images/linkedin.png" alt="LinkedIn" /></a>
              <a href='#'><img src="/images/github.png" alt="GitHub" /></a>
              <a href='#'><img src="/images/discord.png" alt="Discord" /></a>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
