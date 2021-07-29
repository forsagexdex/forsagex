require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html

const accounts = {
  mnemonic: process.env.MNEMONIC || "test test test test test test test test test test test junk",
  initialIndex: 8
  // accountsBalance: "990000000000000000000",
}

task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

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

  solidity: {
    compilers: [
      {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.5.17",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  spdxLicenseIdentifier: {
    overwrite: false,
    runOnCompile: true,
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey:"4HHA18QSNKKNRDY8R628Z7VX2M5C93264Y"
  },
  defaultNetwork: "local",
  networks: {
    local: {
      url: `http://localhost:8545`,
      accounts,
      attachs:{
          fee: "f39fd6e51aad88f6f4ce6ab8827279cfffb92266",
          A0:"0xCc3dDa466A18C4F20Bc0750756B92E2f23741Fd3",
          A1:"0x265C21b34e0E92d63C678425478C42aa8D727B79",
          weth :"0x280f8921E36d6Af2E03AD84EC8194ad1b6B4799c",
          fex :"0x5f62d238B3022bA5881e5e443B014cac6999a4f2",
          fexpool:"0x00f59693Ab3a491356FDB4Facb4B04D811135E22",
          uniswap:{
            factory:"0xAc2C50Af31501370366D243FaeC56F89128f6d96",
            router:"0x666f755Ff171702702EAc10339A2a613698Cbd2f",
          },
          perblock:"32",
          startblock:"30",
          halvingperiod: "201600",
         
      }
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
      gasPrice: 10 * 1000000000,
      chainId: 1,
    },  
    eth:{
      url: `https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161`,
      accounts,
      gasPrice: 25*1000000000,
      chainId: 1,
      loggingEnabled: true,
      blockGasLimit:0x280de80,
      attachs:{
          fee: "0xdECE6Fe6a5ED7b114981a19e434E854310a0cDdF",
          A0: "0x34EaB903c0D729Eac31570C22Ee95CFb0691b51D",
          A1: "0xBe4ec6F42022DE3b8040F6D1fa4dE15F1e36F095",
          usdt:"0xdac17f958d2ee523a2206206994597c13d831ec7",
          weth :"0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
          fex :"0x16187C00F9453EcCcad482B4BD1ae2De0c8b81fD",
          fexpool:"0x984A9679E4b72877984ff9271658e419cfb1D2B9",
          uniswap:{
            factory:"0x4E446914a26DAFA36F0025D70D4BF1a33da45d75",
            router:"0xFb9331d7B84FB4577f2Bfe424fE9b58e4Ae3A90c",
          },
          perblock:"48",
          startblock:12914827
        }
    }
  }
};

