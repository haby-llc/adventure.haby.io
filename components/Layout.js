import { useEffect, useState } from 'react';
import styles from '../styles/components/Layout.module.css';
import Footer from './Footer.js';

export default function Layout({ children }) {
  const [windowReady, setWindowReady] = useState(false);
  useEffect(() => setWindowReady(true));

  return (
    <>
      <main>
        <div className={styles.layoutContainer}>
          {children}
        </div>
      </main>
      {windowReady ? <Footer /> : null}
    </>
  )
};
