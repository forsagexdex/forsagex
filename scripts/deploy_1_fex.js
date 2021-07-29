const hre = require("hardhat");
require("@nomiclabs/hardhat-waffle");



async function main() {

const accounts = await ethers.getSigners();
 for (const account of accounts) {
     const balance = await ethers.provider.getBalance(account.address);
     console.log(account.address+",balance="+balance);
  }

  const feeAdrr = hre.network.config.attachs.fee;
  console.log("fee to :",feeAdrr);
  /** usdt:"0x41dBB528b5662caD3b8183754C0517b409E00Fa8",
      husd:"0x60aC4593ecea0B22216218c4D0f27533ebB01CB6",
      hbtc:"0xa0945a7aC164287B4e6B8f234337820807074a29",
      heth:"0x9771321265cAD7049903EaF4a574Eab51fD97378",
      hltc:"0x8E02433C31B51ABe3Ac65908d59eF82ddB52714F",
      wbnb :"0x7f3fF452D3da0EAD3ce227eB4A6c84E896685C3C",
      hdot:"0x426dcD4fa088D7b33797Da0002bF36a669B398D5",
      */
  const FEX = await hre.ethers.getContractFactory("FEXToken");
  const fex = await FEX.deploy();
  await fex.deployed();
  console.log("FEX deployed to:", fex.address);
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });