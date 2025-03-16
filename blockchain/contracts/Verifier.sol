// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./Pairing.sol"; // Library zk-SNARK

contract Verifier {
    function verifyProof(uint256[2] memory a, uint256[2][2] memory b, uint256[2] memory c, uint256[1] memory input) public pure returns (bool) {
        return Pairing.pairing(a, b, c, input);
    }
}
