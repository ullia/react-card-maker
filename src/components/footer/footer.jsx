import React, { memo } from 'react';
import styles from './footer.module.css';

const Footer = memo(() => (
  <footer className={styles.footer}>
    {console.log('add card footer!!')}
    <p className={styles.title}>Code your dream</p>
  </footer>
));

export default Footer;
