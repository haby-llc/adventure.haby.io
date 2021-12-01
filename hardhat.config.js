require("@nomiclabs/hardhat-waffle");
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
const { REACT_APP_ALCHEMY_API_URL, PRIVATE_KEY } = process.env;

// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => { // eslint-disable-line
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.6",
  defaultNetwork: "rinkeby",
   networks: {
      hardhat: {},
      rinkeby: {
         url: REACT_APP_ALCHEMY_API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      }
   },
};
