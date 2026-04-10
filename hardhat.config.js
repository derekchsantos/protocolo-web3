require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: {
    version: "0.8.28",
    settings: {
      evmVersion: "cancun",
      optimizer: { enabled: true, runs: 200 }
    }
  },
  networks: {
    sepolia: {
      // URL COMPLETA DIRETAMENTE AQUI PARA EVITAR ERRO
      url: "https://eth-sepolia.g.alchemy.com/v2/7LfFwNvYs0BsEL_WzCleA",
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },
  },
};


