import { Web3ReactProvider } from '@web3-react/core'
import { ethers } from "ethers";

import { Home } from './pages';

function getLibrary(provider, connector) {
  return new ethers.providers.Web3Provider(provider);
}

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Home />
    </Web3ReactProvider>
  );
}

export default App;
