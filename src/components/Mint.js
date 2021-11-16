import './Mint.css';
import { useState } from 'react';
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import { Button } from '../components';
import CharacterJson from '../contracts/Character.json';


function Mint() {
  const [ mintStatus, setMintStatus ] = useState("");
  const [ mintError, setMintError ] = useState("");
  const { account, deactivate, library } = useWeb3React();

  // Define Character contract
  const characterContractAddress = '0xE600AFed52558f0c1F8Feeeb128c9b932B7ae4e3';
  const characterContract = new ethers.Contract(characterContractAddress, CharacterJson.abi, library);
  const signerContract = characterContract.connect(library.getSigner());

  async function mint() {
    try {
      setMintStatus("");
      setMintError("");

      const mintPrice = await signerContract.getPrice();
      const mintNumber = 1;
      
      const transaction = await signerContract.mintPublic(
        mintNumber,
        { value: ethers.utils.parseUnits((mintNumber * mintPrice).toString(), "wei") }
      );
      setMintStatus("Minting...");
      await transaction.wait();

      setMintStatus("You've successfully minted a Character!");
    } catch (error) {
      console.error(error);
      setMintError(error.message);
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
      <div className="monospace-font white-text mint-message-padding">
        <p className="mint-success no-margin">
          { mintStatus }
        </p>
        <p className="mint-error no-margin">
          { mintError }
        </p>
      </div>
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
