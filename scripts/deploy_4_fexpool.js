const hre = require("hardhat");
require("@nomiclabs/hardhat-waffle");
const web3 = require('web3');
var Assert = require('assert');

async function main() {

const accounts = await ethers.getSigners();
const attachs = hre.network.config.attachs;

const WBNB = await hre.ethers.getContractFactory("WETH");
const wbnb = await WBNB.attach(attachs.weth);
console.log("wbnb attach to:", wbnb.address);

const FEXToken = await hre.ethers.getContractFactory("FEXToken");
const fex = await FEXToken.attach(attachs.fex);
console.log("fex attach to:", fex.address);

const FEXPool = await hre.ethers.getContractFactory("FEXPool");

_fexPerBlock = ethers.utils.parseUnits(attachs.perblock)
// IFEX _fex,
// uint256 _fexPerBlock,
// uint256 _startBlock
const fexPool = await FEXPool.deploy(fex.address,_fexPerBlock,attachs.startblock);
await fexPool.deployed();
console.log("fexPool deployed to:", fexPool.address);
await fex.addMinter(fexPool.address);
console.log("fex addMinter to:", fexPool.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });