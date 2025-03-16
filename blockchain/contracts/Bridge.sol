// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Bridge {
    event TokenBridged(address indexed sender, uint256 amount, string targetChain);

    function bridgeToken(uint256 amount, string memory targetChain) external {
        require(amount > 0, "Amount must be greater than zero");
        emit TokenBridged(msg.sender, amount, targetChain);
    }
}
