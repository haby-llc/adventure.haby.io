import styles from '../styles/components/Footer.module.css';

import { useMediaQuery } from 'react-responsive';

function Footer() {
  const isMobile = useMediaQuery({ maxWidth: 480 });
  const isFlexRow = useMediaQuery({ minWidth: 700 });

  const getLinksSection = () => (
    <div className={styles.footerRightSection}>
      <div className={styles.footerRightSectionLinks}>
        <a
          href="https://habylabs.notion.site/Adventure-4f87d1d22f4a4429bed314240ae5f02e"
          target="_blank"
          rel="noopener noreferrer"
          className={`link monospace-font ${styles.footerLink}`}
        >
          Notion
        </a>
        <a
          href="https://etherscan.io/address/0xe600afed52558f0c1f8feeeb128c9b932b7ae4e3"
          target="_blank"
          rel="noopener noreferrer"
          className={`link monospace-font ${styles.footerLink}`}
        >
          Contract
        </a>
        <a
          href="https://github.com/haby-llc/adventure.haby.io"
          target="_blank"
          rel="noopener noreferrer"
          className={`link monospace-font ${styles.footerLink}`}
        >
          Source Code
        </a>
      </div>

      <div className={styles.footerButtonsRow}>
        <div className={styles.footerIconButton}>
          <a
            href="https://discord.gg/TXgaBwYZep"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerIconButtonLink}
          >
            <img src="/discord-logo-white.svg" className={styles.footerSvg} alt="Discord" />
          </a>
        </div>
        <div className={styles.footerIconButton}>
          <a
            href="https://twitter.com/HabyLabs"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerIconButtonLink}
          >
            <img src="/twitter-logo-white.svg" className={styles.footerSvg} alt="Twitter" />
          </a>
        </div>
        <div className={styles.footerIconButton}>
          <a
            href="https://opensea.io/HabyLabs?tab=created"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerIconButtonLink}
          >
            <img src="/opensea-logo-transparent.svg" className={styles.footerSvg} alt="Open Sea" />
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <footer
      className={`${styles.appFooter} ${isMobile ? "side-padding-mobile" : "side-padding"} ${isFlexRow ? "row" : "column"}`}
    >
      {isFlexRow ? null : getLinksSection()}
      <div className={`${styles.footerLeftSection} ${isFlexRow ? "" : styles.footerLeftSectionColumnPadding}`}>
        <div className={styles.footerLeftSectionTop}>
          <div className={styles.habyLabsLogo}>
            <img src="/logo.svg" className={styles.habyLogoFooterSvg} alt="logo" />
            <p className={`monospace-font no-margin ${styles.habyLogoText}`}>
              <strong>Haby Labs</strong>
            </p>
          </div>
          <p className={`monospace-font no-margin ${styles.habyDescription}`}>
            Come explore the metaverse with us.
          </p>
        </div>

        <p className={`monospace-font no-margin ${styles.copyright}`}>
          ©2021 Haby, LLC. All rights reserved.
        </p>
      </div>
      {isFlexRow ? getLinksSection() : null}
    </footer>
  );
}
  
export default Footer;
