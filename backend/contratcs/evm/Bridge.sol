// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Bridge is Ownable {
    mapping(bytes32 => bool) public processedTransactions;
    
    event CrossChainTransfer(address indexed sender, uint256 amount, string targetChain, bytes targetAddress);

    function sendTokens(uint256 amount, string memory targetChain, bytes memory targetAddress) external payable {
        require(amount > 0, "Amount must be greater than 0");
        require(msg.value >= amount, "Insufficient funds");
        
        bytes32 txHash = keccak256(abi.encodePacked(msg.sender, amount, targetChain, targetAddress, block.timestamp));
        processedTransactions[txHash] = true;

        emit CrossChainTransfer(msg.sender, amount, targetChain, targetAddress);
    }
}
