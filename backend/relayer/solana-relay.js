const { Connection, PublicKey } = require("@solana/web3.js");

async function listenForEvents() {
  const connection = new Connection("https://api.devnet.solana.com");
  const programId = new PublicKey("BridGeSolana123456789012345678901234567890");

  connection.onLogs(programId, (logInfo) => {
    if (logInfo.logs.some((log) => log.includes("BridgeEvent"))) {
      console.log("🚀 New Solana Cross-Chain Event Detected:", logInfo.logs);
    }
  });
}

listenForEvents();
