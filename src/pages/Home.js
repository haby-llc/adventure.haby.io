import './Home.css';

import {
  Title,
  ComingSoon,
  Footer,
} from '../components';

function Home() {
  return (
    <div className="Home">
      <div className="above-the-fold">
        <Title />
        <ComingSoon />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
