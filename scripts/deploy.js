import { network } from "hardhat";

async function main() {
  const { ethers, networkName } = await network.connect();
  
  const ContractName = "SimpleStorage";
  console.log(`Deploying ${ContractName} to ${networkName}...`);

  const contract = await ethers.deployContract(ContractName);

  console.log("Waiting for deployment...");
  await contract.waitForDeployment();

  const address = await contract.getAddress();
  console.log(`🚀 Success! Deployed to: ${address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});