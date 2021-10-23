import logo from '../svg/logo.svg';
import discordLogo from '../svg/discord-logo-white.svg'
import './Footer.css';

function Footer() {
  return (
    <footer className="App-footer">
      <div className="Footer-logos">
        <img src={logo} className="Footer-svg" alt="logo" />
        <a
          href="https://discord.gg/nWZNmJmQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={discordLogo} className="Footer-svg" alt="discord logo" />
        </a>
      </div>
      <div className="Footer-copyright">  
        <p className="Copyright">© Haby, LLC</p>
      </div>
    </footer>
  );
}
  
export default Footer;