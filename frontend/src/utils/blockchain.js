export async function sendBridgeTransaction(amount, fromChain, toChain) {
  const response = await fetch("http://localhost:5000/bridge", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount, fromChain, toChain }),
  });

  const data = await response.json();
  return data.txHash;
}
