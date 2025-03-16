const snarkjs = require("snarkjs");
const fs = require("fs");

async function generateBatchProof(transactions) {
    const { proof, publicSignals } = await snarkjs.groth16.fullProve(
        transactions,
        "batch_bridge.wasm",
        "batch_bridge.zkey"
    );
    
    fs.writeFileSync("batch_proof.json", JSON.stringify(proof, null, 2));
    console.log("Batch Proof Generated:", proof);
}

const transactions = {
    senders: [12345, 67890, 11111, 22222, 33333, 44444, 55555, 66666, 77777, 88888],
    amounts: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
    targetChains: [1, 1, 2, 2, 1, 1, 2, 2, 1, 1]
};

generateBatchProof(transactions);
