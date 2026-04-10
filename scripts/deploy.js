const hre = require("hardhat");

async function main() {
  console.log("Iniciando deploy dos contratos...");

  // 1. Deploy do Token
  const Token = await hre.ethers.getContractFactory("Token");
  const token = await Token.deploy();
  await token.waitForDeployment();
  console.log("Token implantado em:", await token.getAddress());

  // 2. Deploy do NFT
  const NFT = await hre.ethers.getContractFactory("NFT");
  const nft = await NFT.deploy();
  await nft.waitForDeployment();
  console.log("NFT implantado em:", await nft.getAddress());

  // 3. Deploy da Governança
  const Gov = await hre.ethers.getContractFactory("Governance");
  const gov = await Gov.deploy();
  await gov.waitForDeployment();
  console.log("Governance implantado em:", await gov.getAddress());

  // 4. Deploy do Staking (Passando Token e Oráculo Sepolia)
  const ETH_USD_ORACLE = "0x694AA1769357215DE4FAC081bf1f309aDC325306";
  const Staking = await hre.ethers.getContractFactory("Staking");
  const staking = await Staking.deploy(await token.getAddress(), ETH_USD_ORACLE);
  await staking.waitForDeployment();
  console.log("Staking implantado em:", await staking.getAddress());

  console.log("Deploy finalizado com sucesso!");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

