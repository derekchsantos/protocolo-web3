# Protocolo Web3 MVP 🚀

📌 **Descrição**
Protocolo descentralizado desenvolvido para a gestão de ativos digitais, integrando emissão de tokens (ERC-20), coleções de NFTs (ERC-721), sistema de recompensas (Staking) com dados do mundo real e governança participativa (DAO).

🏗️ **Arquitetura de Smart Contracts**
*   **Token ERC-20:** `0x496d47447eb836490a8Ec743BB3257117A515f4A`
*   **NFT ERC-721:** `0x1b6CBfCCa3B455B74a0DF386ee0c764f901EF5c2`
*   **Staking (Oráculo Chainlink):** `0x982e869e8d41925e1CD8874C10ef3dCB29C23594`
*   **Governança (DAO):** ` 0x36E1484a26B2d4EC16d0323CfD269F2b22Dc1504`

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

