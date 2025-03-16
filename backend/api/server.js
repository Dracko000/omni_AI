const express = require("express");
const { logTransaction } = require("./logger");

const app = express();
app.use(express.json());

app.post("/log", (req, res) => {
  const { tx } = req.body;
  logTransaction(tx);
  res.json({ status: "Transaction Logged" });
});

app.listen(5000, () => console.log("Backend API Running on port 5000"));
