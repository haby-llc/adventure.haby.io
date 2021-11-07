import './Title.css';
import { useMediaQuery } from 'react-responsive';

function Title() {
  const isMobile = useMediaQuery({ maxWidth: 480 });
  const need75WidthDescription = useMediaQuery({ minWidth: 800 });
  const need50WidthDescription = useMediaQuery({ minWidth: 1200 });

  let titleDescription = "title-description-100";
  if (need50WidthDescription) {
    titleDescription = "title-description-50";
  } else if (need75WidthDescription) {
    titleDescription = "title-description-75";
  } 

  return (
    <div className={`title ${isMobile ? "side-padding-mobile" : "side-padding"}`}>
      <div className="title-header">
        <h1 className="title-header-text no-margin serif-font">
          Welcome Adventurer!
        </h1>
      </div>
      <div className={titleDescription}>
        <p className="title-description-text monospace-font">
          Mint your&nbsp;
          <a
            href="https://habylabs.notion.site/Character-0e4068e606a74f0195685e83564046d5"
            target="_blank"
            rel="noopener noreferrer"
            className="link monospace-font"
          >
            Character
          </a> and join a new
          world of adventure that is inspired by and built on top of&nbsp; 
          <a
            href="https://www.lootproject.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="link monospace-font"
          >
            Loot
          </a>.
          Your character is randomly generated and stored on chain. Each 
          character will have&nbsp;
          <a
            href="https://habylabs.notion.site/Stats-8b5e87f09c974062b7ddc6930231ca36"
            target="_blank"
            rel="noopener noreferrer"
            className="link monospace-font"
          >
            Stats
          </a> and skills. 
          Use them to clear dungeons and earn gold.
          Be the adventurer you were always born to be.
        </p>
      </div>
    </div>
  );
};

export default Title;
