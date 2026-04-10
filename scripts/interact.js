const hre = require("hardhat");

async function main() {
  // SUBSTITUA PELOS SEUS ENDEREÇOS REAIS DO DEPLOY
  const TOKEN_ADDR = "0x4B913269286B1F776180836DE37e7c1cf286D107";
  const STAKING_ADDR = "0x730F2D21e11c3fC1bA264f9feC1D5bf2d37B4767";
  const GOV_ADDR = "0x632fD3F554cB0D9Eb57D221bD69Df84095DEC135";

  const [signer] = await hre.ethers.getSigners();
  console.log("Interagindo com os contratos usando a conta:", signer.address);

  // 1. Interação com o Token (Consulta de Saldo)
  const token = await hre.ethers.getContractAt("Token", TOKEN_ADDR);
  const balance = await token.balanceOf(signer.address);
  console.log(`Saldo de Tokens: ${hre.ethers.formatEther(balance)} MTK`);

  // 2. Interação com o Staking + Oráculo (Consulta de Preço ETH)
  const staking = await hre.ethers.getContractAt("Staking", STAKING_ADDR);
  const price = await staking.getPrice();
  // Preço da Chainlink vem com 8 casas decimais
  console.log(`Preço atual do ETH (via Chainlink): $${Number(price) / 1e8}`);

  // 3. Interação com a Governança (Criar Proposta)
  const gov = await hre.ethers.getContractAt("Governance", GOV_ADDR);
  console.log("Criando uma proposta na DAO...");
  const tx = await gov.create("Aumentar recompensas de Staking");
  await tx.wait();
  console.log("Proposta criada com sucesso!");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
