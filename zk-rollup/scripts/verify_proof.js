const { ethers } = require("ethers");
const VerifierABI = require("./VerifierABI.json");

const contractAddress = "0xYourVerifierContractAddress"; // Replace with actual deployed contract

async function verifyProof(proof) {
    const provider = new ethers.providers.JsonRpcProvider("https://goerli.infura.io/v3/YOUR_INFURA_KEY");
    const contract = new ethers.Contract(contractAddress, VerifierABI, provider);

    const isValid = await contract.verifyProof(proof.a, proof.b, proof.c, proof.input);
    console.log("Proof valid:", isValid);
}

const proof = require("./proof.json");
verifyProof(proof);
