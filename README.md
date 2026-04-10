``shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```
=======
# Protocolo Web3 Completo

## 📌 Descrição
Protocolo descentralizado com token, NFT, staking e governança.

## 🏗️ Arquitetura
- Token ERC-20: [Endereço]
- NFT ERC-721: [Endereço]
- Staking: [Endereço]
- Governança: [Endereço]

## 🔗 Links
- Testnet: Sepolia
- Explorador: https://sepolia.etherscan.io

## 🚀 Como Usar
1. Clone o repo
2. `npm install`
3. Configure `.env`
4. `npx hardhat run scripts/deploy.js --network sepolia`

## 🔒 Segurança
- ReentrancyGuard implementado
- AccessControl via Ownable
- Auditado com Slither e Mythril

## 📄 Licença
MIT
>>>>>>> 3d8ec511fc58f082c731a9d68f7bc996da948a48
