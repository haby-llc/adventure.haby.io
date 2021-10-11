import { ethers } from "ethers";
import './Web3.css';
import CharacterJson from './contracts/Character.json';

// A Web3Provider wraps a standard Web3 provider, which is
// what Metamask injects as window.ethereum into each page
const provider = new ethers.providers.Web3Provider(window.ethereum)

// Define Character contract
const characterContractAddress = '0xD21e7064536f6c64b9962C08DD2B832f3a08f979';
const contract = new ethers.Contract(characterContractAddress, CharacterJson.abi, provider);

async function mintCharacter() {
  try {
    // First get permission from user to access account
    await window.ethereum.request({ method: 'eth_requestAccounts' });

    // Then connect the user's address with contract to enable transaction
    const signer = provider.getSigner();
    const contractWithSigner = contract.connect(signer);

    // Process transaction
    const transaction = await contractWithSigner.mintPublic(2, { value: ethers.utils.parseEther("0.1") });
    await transaction.wait();
  } catch (error) {
    console.log("error");
    console.error(error);

    alert("There was an error! Please make sure you are logged into Metamask and have sufficient funds");
  }
}

function Web3() {
  return (
    <button onClick={mintCharacter}>
      Buy
    </button>
  );
}

export default Web3;
