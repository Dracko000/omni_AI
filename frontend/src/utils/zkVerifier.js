export async function verifyZkProof(proofHash) {
  const response = await fetch("http://localhost:5000/verify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ proofHash }),
  });

  const data = await response.json();
  return data.verified;
}
