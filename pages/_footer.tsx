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
              <a href='https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BpQDyx8qPRheqgACmRQgvTA%3D%3D'><img src="/images/linkedin.png" alt="LinkedIn" /></a>
              <a href='https://github.com/peachnono'><img src="/images/github.png" alt="GitHub" /></a>
              <a href='#'><img src="/images/discord.png" alt="Discord" /></a>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
