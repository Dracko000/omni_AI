const snarkjs = require("snarkjs");
const fs = require("fs");

async function generateProof(inputData) {
    const { proof, publicSignals } = await snarkjs.groth16.fullProve(inputData, "bridge.wasm", "bridge.zkey");
    fs.writeFileSync("proof.json", JSON.stringify(proof, null, 2));
    console.log("Proof generated:", proof);
}

generateProof({ sender: 12345, amount: 1000, targetChain: 1 });
