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

    function getPrice() public view returns (int) {
        (,int price,,,) = priceFeed.latestRoundData();
        return price;
    }
}
