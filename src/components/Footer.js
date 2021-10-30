import logo from '../svg/logo.svg';
import discordLogo from '../svg/discord-logo-white.svg';
import openseaLogo from '../svg/opensea-logo-transparent.svg';
import twitterLogo from '../svg/twitter-logo-white.svg';
import './Footer.css';

function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-left-section">
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

      <div className="footer-right-section">
        <div className="footer-right-section-links">
          <a
            href="https://github.com/haby-llc/adventure.haby.io"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link monospace-font"
          >
            Smart Contract
          </a>
          <a
            href="https://github.com/haby-llc/adventure.haby.io"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link monospace-font"
          >
            Source Code
          </a>
          <a
            href="https://www.haby.io/projects"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link monospace-font"
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
    </footer>
  );
}
  
export default Footer;