import './Home.css';

import {
  Header,
  Title,
  ComingSoon,
  Mint,
  Faq,
  Community,
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
      <Community />
      <Footer />
    </div>
  );
};

export default Home;
