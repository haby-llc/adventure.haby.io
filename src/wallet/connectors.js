import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';

require('dotenv').config();
const { REACT_APP_ALCHEMY_API_URL } = process.env;

export const injectedConnector = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
});

export const walletConnectConnector = new WalletConnectConnector({
  rpc: { 
    1: REACT_APP_ALCHEMY_API_URL,
    3: REACT_APP_ALCHEMY_API_URL,
    4: REACT_APP_ALCHEMY_API_URL,
    5: REACT_APP_ALCHEMY_API_URL,
    42: REACT_APP_ALCHEMY_API_URL,
  },
  qrcode: true,
});
