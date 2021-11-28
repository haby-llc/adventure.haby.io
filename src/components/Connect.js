import './Connect.css';
import { useWeb3React } from "@web3-react/core";
import { injectedConnector, walletConnectConnector } from "../wallet/connectors.js";
import { Button } from '../components';

function Connect() {
  const { activate } = useWeb3React();

  async function connectMetaMask() {
    try {
      await activate(injectedConnector)
    } catch (error) {
      console.log(error)
    }
  }

  async function connectWalletConnect() {
    try {
      await activate(walletConnectConnector)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="column">
      <p className="connect-text monospace-font no-margin">
        Connect Wallet
      </p>
      <div className="row align-center justify-center">
        <div className="connect-button-container">
          <Button onClick={connectMetaMask}>
            MetaMask
          </Button>
        </div>
        <div>
          <Button onClick={connectWalletConnect}>
            WalletConnect
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Connect;
