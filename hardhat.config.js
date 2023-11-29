require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.13",
  defaultNetwork: "base",
  networks: {
    hardhat: {},
    base: {
      url: "https://mainnet.base.org",
      accounts: [`xxx`],
    },
  },
  etherscan: {
    apiKey: {
      base: "xxx",
    },
    customChains: [
      {
        network: "base",
        chainId: 8453,
        urls: {
          apiURL: "https://api.basescan.org/api",
          browserURL: "https://basescan.org",
        },
      },
    ],
  },
};
