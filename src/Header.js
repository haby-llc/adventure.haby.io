import logo from './svg/logo.svg';
import discordLogo from './svg/discord-logo-white.svg'
import './Header.css';

function Header() {
  return (
    <header className="App-header">
      <div className="Haby-logo">
        <img src={logo} className="Haby-logo-svg Header-svg" alt="logo" />
        <p className="Haby-logo-text">
          <strong>Haby Labs</strong>
        </p>
      </div>
      <a
        href="https://discord.gg/nWZNmJmQ"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={discordLogo} className="Discord-logo Header-svg" alt="discord logo" />
      </a>
    </header>
  );
}
  
export default Header;