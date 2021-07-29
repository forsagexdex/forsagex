const hre = require("hardhat");
require("@nomiclabs/hardhat-waffle");
const web3 = require('web3');
var Assert = require('assert');

async function main() {

const accounts = await ethers.getSigners();
//  for (const account of accounts) {
//      const balance = await ethers.provider.getBalance(account.address);

//     console.log(account.address+",balance="+balance);
//   }
const attachs = hre.network.config.attachs;

const FEXToken = await hre.ethers.getContractFactory("FEXToken");
const fex = await FEXToken.attach(attachs.fex);
console.log("fex attach to:", fex.address);
console.log("fex transferOwnership to :",await fex.transferOwnership(attachs.fee));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });