import { ethers } from "ethers";
import BridgeABI from "./BridgeABI.json";

const contractAddress = "0xYourBridgeContractAddress"; // Gantilah dengan alamat contract testnet

export async function bridgeToken(amount, toChain) {
  if (!window.ethereum) throw new Error("Metamask not detected!");

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, BridgeABI, signer);

  const tx = await contract.bridgeToken(amount, toChain);
  await tx.wait();
  return tx.hash;
}
