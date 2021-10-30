import './Home.css';

import {
  Header,
  Title,
  ComingSoon,
  Mint,
  Faq,
  Footer,
} from '../components';

function Home() {
  return (
    <div className="Home">
      <Header />
      <Title />
      <ComingSoon />
      <Mint />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
