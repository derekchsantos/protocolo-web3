# Protocolo Web3 MVP 🚀

📌 **Descrição**
Protocolo descentralizado desenvolvido para a gestão de ativos digitais, integrando emissão de tokens (ERC-20), coleções de NFTs (ERC-721), sistema de recompensas (Staking) com dados do mundo real e governança participativa (DAO).

🏗️ **Arquitetura de Smart Contracts**
*   **Token ERC-20:** `0x4B913269286B1F776180836DE37e7c1cf286D107`
*   **NFT ERC-721:** `0xA7c8096B1046284013CbC7D06239E1fB2Cd3B762`
*   **Staking (Oráculo Chainlink):** `0x730F2D21e11c3fC1bA264f9feC1D5bf2d37B4767`
*   **Governança (DAO):** `0x632fD3F554cB0D9Eb57D221bD69Df84095DEC135`

🔗 **Rede e Exploração**
*   **Blockchain:** Ethereum Testnet Sepolia
*   **Explorador de Blocos:** [Sepolia Etherscan](https://sepolia.etherscan.io)

🔒 **Segurança e Auditoria**
*   **Proteção de Ativos:** Implementação de `ReentrancyGuard` contra ataques de reentrada e `Ownable` para controle de acesso administrativo via bibliotecas **OpenZeppelin**.
*   **Dados Externos:** Integração com Oráculos **Chainlink** para alimentação de preços descentralizada e segura.
*   **Infraestrutura:** Desenvolvido em **Solidity ^0.8.28** com alvo na EVM Cancun.
*   **Auditoria Estática:** Validado e auditado via **Slither** e análise de segurança nativa do **Hardhat**.

📄 **Licença**
Este projeto está sob a licença [MIT](LICENSE).

