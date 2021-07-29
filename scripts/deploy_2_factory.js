const hre = require("hardhat");
require("@nomiclabs/hardhat-waffle");



async function main() {

const accounts = await ethers.getSigners();
const feeAdrr = hre.network.config.attachs.fee;
console.log("fee to :",feeAdrr);
  const attachs = hre.network.config.attachs;
  const UniswapV2Factory = await hre.ethers.getContractFactory("UniswapV2Factory");
  const factory = await UniswapV2Factory.deploy(accounts[0].address);
  await factory.deployed();
  console.log("factory deployed to:", factory.address);
  const pairCodeHash = await factory.pairCodeHash();
  console.log("factory pairCodeHash is:", pairCodeHash);
  await factory.setFeeTo(feeAdrr);
  console.log("factory fee to:", await factory.feeTo());
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });