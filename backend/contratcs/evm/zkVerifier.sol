// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";

contract zkVerifier is Ownable {
    event ProofValidated(bytes32 proofHash, bool isValid);

    function validateProof(bytes32 proofHash, bool isValid) external onlyOwner {
        require(isValid, "Invalid zk-Proof");
        emit ProofValidated(proofHash, isValid);
    }
}
