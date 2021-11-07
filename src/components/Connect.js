import { useWeb3React } from "@web3-react/core";
import { injectedConnector } from "../wallet/connectors.js";
import { Button } from '../components';

function Connect() {
  const { activate } = useWeb3React();

  async function connect() {
    try {
      await activate(injectedConnector)
    } catch (ex) {
      console.log(ex)
    }
  }

  return (
    <Button onClick={connect}>
      Connect Wallet
    </Button>
  );
};

export default Connect;
