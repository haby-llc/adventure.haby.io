import { Contract, ethers } from "ethers";
import './Web3.css';
import CharacterJson from '../contracts/character.sol/Character.json';

// A Web3Provider wraps a standard Web3 provider, which is
// what Metamask injects as window.ethereum into each page
const provider = new ethers.providers.Web3Provider(window.ethereum)

// Define Character contract
const characterContractAddress = '';
const contract = new ethers.Contract(characterContractAddress, CharacterJson.abi, provider);

// The Metamask plugin also allows signing transactions to
// send ether and pay to change state within the blockchain.
// For this, you need the account signer...
const signer = provider.getSigner()

// Show metamask for users to decide if they will pay or not
async function requestAccount() {
  try {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  } catch (error) {
    console.log("error");
    console.error(error);

    alert("Login to Metamask first");
  }
}

function Web3() {
  return (
    <div>
      Button
    </div>
  );
}

export default Web3;
