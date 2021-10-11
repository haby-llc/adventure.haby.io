import Header from './Header.js';
import Faq from './Faq.js';
import ScrollDown from './ScrollDown.js';
import Web3 from './Web3.js';
import './Body.css';
import comingSoon from './img/coming-soon-neon.jpg';

function Body() {
  return (
    <div className="Body">
      <div className="Body-above-fold">
        <div>
          <Header />
  
          <div className="Title">
            <h1 className="Title-header">
              Choose Your Adventure!
            </h1>
            <p className="Title-text">
              Get a Character, with Stats, Skills, and Familiars to enter the Loot-verse.
            </p>
          </div>
        </div>
        
        <div className="Coming-soon">
          <img src={comingSoon} className="Coming-soon-img" alt="Coming Soon!" />
          <Web3 />
        </div>

        <div className="Cta">
          <a
            className="Cta-button"
            href="https://discord.gg/nWZNmJmQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join our Discord to learn more
          </a>
        </div>

        <div className="Body-scroll-down">
          <ScrollDown />
        </div>
      </div>
      
      <Faq />
    </div>
  );
}

export default Body;