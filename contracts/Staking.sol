// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@chainlink/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol";

contract Staking is ReentrancyGuard {
    IERC20 public token;
    AggregatorV3Interface internal priceFeed;

    constructor(address _token, address _priceFeed) {
        token = IERC20(_token);
        priceFeed = AggregatorV3Interface(_priceFeed);
    }

    // CORREÇÃO: Agora capturamos e validamos todos os retornos
    function getPrice() public view returns (int256) {
        (
            uint80 roundId,
            int256 price,
            uint256 startedAt,
            uint256 updatedAt,
            uint80 answeredInRound
        ) = priceFeed.latestRoundData();

        // Validações para evitar dados inválidos ou obsoletos
        require(price > 0, "Invalid price");
        require(updatedAt > block.timestamp - 1 hours, "Stale data");
        require(roundId > 0, "Invalid round ID");

        return price;
    }
}
