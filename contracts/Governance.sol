// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Governance {
    struct Proposal { string desc; uint256 votes; bool exec; }
    Proposal[] public proposals;

    function create(string memory _d) external { proposals.push(Proposal(_d, 0, false)); }
    function vote(uint256 _id) external { proposals[_id].votes++; }
}
