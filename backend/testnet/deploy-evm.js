require("dotenv").config();
const { ethers } = require("ethers");
const fs = require("fs");

const provider = new ethers.providers.JsonRpcProvider(process.env.GOERLI_RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contractABI = JSON.parse(fs.readFileSync("../contracts/evm/Bridge.json", "utf8"));
const contractBytecode = fs.readFileSync("../contracts/evm/Bridge.bin", "utf8");

async function deployContract() {
  const factory = new ethers.ContractFactory(contractABI, contractBytecode, wallet);
  const contract = await factory.deploy();
  await contract.deployed();
  console.log(`Contract deployed at ${contract.address}`);
}

deployContract().catch(console.error);
