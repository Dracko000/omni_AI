const express = require("express");
const router = express.Router();
const Web3 = require("web3");

const web3 = new Web3(process.env.ETH_RPC_URL);
const bridgeContract = new web3.eth.Contract(
  require("../abi/Bridge.json"),
  process.env.BRIDGE_CONTRACT_ADDRESS
);

router.post("/send", async (req, res) => {
  try {
    const { sender, amount, targetChain, targetAddress } = req.body;
    const data = bridgeContract.methods.sendTokens(amount, targetChain, targetAddress).encodeABI();
    
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
