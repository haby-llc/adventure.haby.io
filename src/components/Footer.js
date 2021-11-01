import './Footer.css';
import logo from '../svg/logo.svg';
import discordLogo from '../svg/discord-logo-white.svg';
import openseaLogo from '../svg/opensea-logo-transparent.svg';
import twitterLogo from '../svg/twitter-logo-white.svg';

import { useMediaQuery } from 'react-responsive';

function Footer() {
  const isMobile = useMediaQuery({ maxWidth: 480 });
  const isFlexRow = useMediaQuery({ minWidth: 700 });

  const getLinksSection = () => (
    <div className="footer-right-section">
      <div className="footer-right-section-links">
        <a
          href="https://habylabs.notion.site/Mission-Vision-Values-1b099b95a05d4139b070f4e8d14a4dda"
          target="_blank"
          rel="noopener noreferrer"
          className="link footer-link monospace-font"
        >
          Values
        </a>
        <a
          href="https://habylabs.notion.site/00152d0c553644629158b4701ce451d4?v=fc026e7cc67a4672a2b6d980cf8cbed0"
          target="_blank"
          rel="noopener noreferrer"
          className="link footer-link monospace-font"
        >
          Roadmap
        </a>
        <a
          href="https://github.com/haby-llc/adventure.haby.io"
          target="_blank"
          rel="noopener noreferrer"
          className="link footer-link monospace-font"
        >
          Source Code
        </a>
        <a
          href="https://etherscan.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="link footer-link monospace-font"
        >
          Smart Contract (Coming Soon)
        </a>
        <a
          href="https://www.haby.io/projects"
          target="_blank"
          rel="noopener noreferrer"
          className="link footer-link monospace-font"
        >
          Other Projects
        </a>
      </div>

      <div className="footer-buttons-row">
        <div className="footer-icon-button">
          <a
            href="https://discord.gg/nWZNmJmQ"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon-button-link"
          >
            <img src={discordLogo} className="footer-svg" alt="Discord" />
          </a>
        </div>
        <div className="footer-icon-button">
          <a
            href="https://discord.gg/nWZNmJmQ"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon-button-link"
          >
            <img src={twitterLogo} className="footer-svg" alt="Twitter" />
          </a>
        </div>
        <div className="footer-icon-button">
          <a
            href="https://discord.gg/nWZNmJmQ"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon-button-link"
          >
            <img src={openseaLogo} className="footer-svg" alt="Open Sea" />
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <footer
      className={`app-footer ${isMobile ? "side-padding-mobile" : "side-padding"} ${isFlexRow ? "row" : "column"}`}
    >
      {isFlexRow ? null : getLinksSection()}
      <div className={`footer-left-section ${isFlexRow ? "" : "footer-left-section-column-padding"}`}>
        <div className="footer-left-section-top">
          <div className="haby-labs-logo">
            <img src={logo} className="haby-logo-footer-svg" alt="logo" />
            <p className="haby-logo-text monospace-font no-margin">
              <strong>Haby Labs</strong>
            </p>
          </div>
          <p className="haby-description monospace-font no-margin">
            Come explore the metaverse with us.
          </p>
        </div>

        <p className="copyright monospace-font no-margin">
          ©2021 Haby, LLC. All rights reserved.
        </p>
      </div>
      {isFlexRow ? getLinksSection() : null}
    </footer>
  );
}
  
export default Footer;