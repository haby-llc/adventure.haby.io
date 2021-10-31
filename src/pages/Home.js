import './Home.css';

import {
  Title,
  ComingSoon,
  Mint,
  Faq,
  Footer,
} from '../components';

function Home() {
  return (
    <div className="Home">
      <div className="above-the-fold">
        <Title />
        <ComingSoon />
      </div>
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
