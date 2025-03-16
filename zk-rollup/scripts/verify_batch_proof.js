const { ethers } = require("ethers");
const BatchVerifierABI = require("./BatchVerifierABI.json");

const contractAddress = "0xYourBatchVerifierContract"; // Ganti dengan alamat yang telah dideploy

async function verifyBatchProof(proof) {
    const provider = new ethers.providers.JsonRpcProvider("https://goerli.infura.io/v3/YOUR_INFURA_KEY");
    const contract = new ethers.Contract(contractAddress, BatchVerifierABI, provider);

    const isValid = await contract.verifyBatchProof(proof.a, proof.b, proof.c, proof.input);
    console.log("Batch Proof valid:", isValid);
}

const proof = require("./batch_proof.json");
verifyBatchProof(proof);
