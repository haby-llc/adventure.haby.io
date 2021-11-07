import './Home.css';
import { useWeb3React } from "@web3-react/core";
import {
  Title,
  Connect,
  Mint,
  Footer,
} from '../components';

function Home() {
  const { active } = useWeb3React();

  return (
    <div className="Home">
      <div className="above-the-fold">
        <Title />
        <div className="row justify-center">
          {active ? <Mint /> : <Connect />}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
