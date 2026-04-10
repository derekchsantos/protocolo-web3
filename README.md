# Protocolo Web3 Completo

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
