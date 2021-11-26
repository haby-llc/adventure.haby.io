import './Mint.css';
import { useState } from 'react';
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import { Button } from '../components';
import CharacterJson from '../contracts/Character.json';


function Mint() {
  const [ numToMint, setNumToMint ] = useState(1);
  const [ contractStatus, setContractStatus ] = useState("");
  const [ contractError, setContractError ] = useState("");
  const { account, deactivate, library } = useWeb3React();

  // Define Character contract
  const characterContractAddress = '0xE600AFed52558f0c1F8Feeeb128c9b932B7ae4e3';
  const ownerAddress = '0xa27999aEE6d546004fA37CfDf372a922aB1C7Eff';
  const characterContract = new ethers.Contract(characterContractAddress, CharacterJson.abi, library);
  const signerContract = characterContract.connect(library.getSigner());

  async function mint() {
    try {
      setContractStatus("Minting...");
      setContractError("");

      const mintPrice = await signerContract.getPrice();
      
      const transaction = await signerContract.mintPublic(
        numToMint,
        { value: ethers.utils.parseUnits((numToMint * mintPrice).toString(), "wei") }
      );
      await transaction.wait();

      setContractStatus("You've successfully minted a Character! Check it out on ");
    } catch (error) {
      console.error(error);
      setContractError(error.message);
      setContractStatus("");
    }
  }

  async function disconnect() {
    try {
      setContractError("");
      deactivate();
    } catch (error) {
      console.error(error);
      setContractError(error.message);
    }
  }
  
  async function withdraw() {
    try {
      setContractStatus("Withdrawing...");
      setContractError("");

      const withdraw = await signerContract.withdraw();
      console.log(withdraw);
      setContractStatus("Withdraw complete!");
    } catch (error) {
      console.error(error);
      setContractError(error.message);
      setContractStatus("");
    }
  }

  function formatAccount() {
    return `${account.slice(0,3)}...${account.slice(account.length - 3)}`
  }

  return (
    <div className="column align-center justify-center">
      <p className="mint-price-text monospace-font">
        0.04 ETH to Mint
      </p>
      <Button onClick={mint} disabled={(contractStatus === "Minting...")}>
        Mint
      </Button>
      <div className="monospace-font white-text mint-message-padding">
        <p className="mint-success no-margin">
          { contractStatus }
          { 
            contractStatus === "You've successfully minted a Character! Check it out on " ? (
              <a
                href="https://opensea.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="link monospace-font"
              >
                OpenSea.
              </a>
            ) : null
          }
        </p>
        <p className="mint-error no-margin">
          { contractError }
        </p>
      </div>
      <Button onClick={disconnect} small outline>
        {formatAccount()} [ disconnect ]
      </Button>
      { 
        account === ownerAddress ? (
          <Button onClick={withdraw} small outline disabled={(contractStatus === "Withdrawing...")}>
            Withdraw Funds
          </Button>
        ) : null
      }
    </div>
  );
};

export default Mint;
