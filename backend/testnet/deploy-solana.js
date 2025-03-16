const { AnchorProvider, Program, web3 } = require("@project-serum/anchor");
const fs = require("fs");

async function deployContract() {
  const provider = AnchorProvider.local();
  const program = new Program(
    JSON.parse(fs.readFileSync("../contracts/solana/bridge.json", "utf8")),
    "BridGeSolana123456789012345678901234567890",
    provider
  );

  const tx = await program.rpc.sendTokens(new web3.PublicKey("TARGET_ADDRESS"), 1000, "Ethereum");
  console.log("Solana contract deployed & test transaction sent:", tx);
}

deployContract().catch(console.error);
