
const hre = require("hardhat");

async function main() {

   //ERC20 BOO TOKEN
    const BooToken = await hre.ethers.getContractFactory("BooToken");
    const booToken = await BooToken.deploy();
    await booToken.deployed();
    console.log(`BOO deployed to ${booToken.address}`);

   //ERC20 LIFE TOKEN
      const LifeToken = await hre.ethers.getContractFactory("LifeToken");
      const lifeToken = await LifeToken.deploy();
      await lifeToken.deployed();
      console.log(`LIfe deployed to ${lifeToken.address}`);


        //ERC20 SINGLE SWAP TOKEN
    const singleSwapToken  = await hre.ethers.getContractFactory("singleSwapToken");
    const SingleSwapToken  = await singleSwapToken.deploy();
    
    await SingleSwapToken.deployed();
    
    console.log(
    `singleSwapToken deployed to ${SingleSwapToken.address}`);

    //SwapMultiHop
  const SwapMultiHop = await hre.ethers.getContractFactory("SwapMultiHop");
  const swapMultiHop = await SwapMultiHop.deploy();
  await swapMultiHop.deployed();
  console.log(`swapMultiHop deployed to ${swapMultiHop.address}`);
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
