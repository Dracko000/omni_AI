import BridgeForm from "../components/BridgeForm";
import { sendBridgeTransaction } from "../utils/blockchain";

const Bridge = () => {
  const handleBridge = async ({ amount, fromChain, toChain }) => {
    const txHash = await sendBridgeTransaction(amount, fromChain, toChain);
    alert(`Transaction Sent: ${txHash}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <BridgeForm onBridge={handleBridge} />
    </div>
  );
};

export default Bridge;
