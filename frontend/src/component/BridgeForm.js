import { useState } from "react";

const BridgeForm = ({ onBridge }) => {
  const [amount, setAmount] = useState("");
  const [fromChain, setFromChain] = useState("Ethereum");
  const [toChain, setToChain] = useState("Solana");

  const handleSubmit = (e) => {
    e.preventDefault();
    onBridge({ amount, fromChain, toChain });
  };

  return (
    <div className="p-4 bg-gray-800 text-white rounded-lg">
      <h2 className="text-lg font-bold mb-4">Bridge Your Tokens</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">Amount:</label>
        <input
          type="number"
          className="w-full p-2 text-black"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <label className="block mt-4 mb-2">From:</label>
        <select
          className="w-full p-2 text-black"
          value={fromChain}
          onChange={(e) => setFromChain(e.target.value)}
        >
          <option>Ethereum</option>
          <option>Solana</option>
          <option>Polkadot</option>
        </select>
        <label className="block mt-4 mb-2">To:</label>
        <select
          className="w-full p-2 text-black"
          value={toChain}
          onChange={(e) => setToChain(e.target.value)}
        >
          <option>Ethereum</option>
          <option>Solana</option>
          <option>Polkadot</option>
        </select>
        <button
          type="submit"
          className="mt-4 bg-blue-500 px-4 py-2 rounded w-full"
        >
          Bridge Now
        </button>
      </form>
    </div>
  );
};

export default BridgeForm;
