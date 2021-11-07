import './Mint.css';
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import { Button } from '../components';
import CharacterJson from '../contracts/Character.json';


function Mint() {
  const { account, deactivate, library } = useWeb3React();

  // Define Character contract
  const characterContractAddress = '0x0Ca6193167Bc33629C40a24030e4acf8382e12a6';
  const characterContract = new ethers.Contract(characterContractAddress, CharacterJson.abi, library);
  const signerContract = characterContract.connect(library.getSigner());

  async function mint() {
    try {
      const mintPrice = await signerContract.getPrice();
      const mintNumber = 1;
      
      const transaction = await signerContract.mintPublic(
        mintNumber,
        { value: ethers.utils.parseUnits((mintNumber * mintPrice).toString(), "wei") }
      );
      await transaction.wait();
    } catch (error) {
      console.log("error");
      console.error(error);

      alert("Please make sure you have sufficient funds in your wallet.");
    }
  }

  async function disconnect() {
    try {
      deactivate()
    } catch (ex) {
      console.log(ex)
    }
  }

  function formatAccount() {
    return `${account.slice(0,3)}...${account.slice(account.length - 3)}`
  }

  return (
    <div className="column align-center justify-center">
      <Button onClick={mint}>
        Mint
      </Button>
      <Button onClick={disconnect} small outline>
        {formatAccount()} [ disconnect ]
      </Button>
    </div>
  );
};

export default Mint;
