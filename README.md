<<<<<<< HEAD
# Protocolo Web3 Completo
=======
📌 Descrição

Protocolo descentralizado MVP integrando emissão de ativos (ERC-20/721), sistema de recompensas com oráculo e governança on-chain.

🏗️ Arquitetura

Token ERC-20: 0x4B913269286B1F776180836DE37e7c1cf286D107

NFT ERC-721: 0xA7c8096B1046284013CbC7D06239E1fB2Cd3B762

Staking (Chainlink): 0x730F2D21e11c3fC1bA264f9feC1D5bf2d37B4767

Governança (DAO): 0x632fD3F554cB0D9Eb57D221bD69Df84095DEC135

🔗 Links

Testnet: Sepolia
Explorador: https://sepolia.etherscan.io

🚀 Como Usar

Clone o repositório
pnpm install
Configure o arquivo .env (ALCHEMY_API_KEY e PRIVATE_KEY)
pnpm exec hardhat run scripts/deploy.js --network sepolia

🔒 Segurança

Roteção: ReentrancyGuard e Ownable (OpenZeppelin)
Compilador: Solidity ^0.8.28 (Target: Cancun)
Auditoria: Validado via Slither e análise estática do Hardhat

📄 Licença
MIT
>>>>>>> 3d8ec511fc58f082c731a9d68f7bc996da948a48
>>>>>>> 18db8a907ebb6cfee14104e0dd18ebd50a9a2e31

## 📌 Descrição
Protocolo descentralizado com token ERC-20, NFT ERC-721, staking e governança.

## 🏗️ Arquitetura
| Contrato | Endereço (Sepolia) | Link no Explorer |
|----------|-------------------|------------------|
| Token ERC-20 | `0x...` | [Ver](https://sepolia.etherscan.io/address/...) |
| NFT ERC-721 | `0x...` | [Ver](https://sepolia.etherscan.io/address/...) |
| Staking | `0x...` | [Ver](https://sepolia.etherscan.io/address/...) |
| Governança | `0x...` | [Ver](https://sepolia.etherscan.io/address/...) |

## 🔗 Links
- Testnet: Sepolia
- Explorador: https://sepolia.etherscan.io

## 🚀 Como Usar
```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/protocolo-web3.git
cd protocolo-web3

# 2. Instale as dependências (usando pnpm)
pnpm install

# 3. Configure o arquivo .env
# Edite .env com sua RPC e Private Key

# 4. Compile os contratos
pnpm exec hardhat compile

# 5. Deploy na Sepolia
pnpm exec hardhat run scripts/deploy.ts --network sepolia

# 6. Verifique no Etherscan (opcional)
pnpm exec hardhat verify --network sepolia <ENDEREÇO_DO_CONTRATO>
