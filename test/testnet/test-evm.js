const { ethers } = require("ethers");
require("dotenv").config();

async function testTransaction() {
  const provider = new ethers.providers.JsonRpcProvider(process.env.GOERLI_RPC_URL);
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
  const contract = new ethers.Contract(process.env.BRIDGE_CONTRACT, require("../abi/Bridge.json"), wallet);

  const tx = await contract.sendTokens(ethers.utils.parseEther("0.1"), "Solana", "TARGET_ADDRESS");
  await tx.wait();

  console.log("Test transaction successful:", tx.hash);
}

testTransaction().catch(console.error);
