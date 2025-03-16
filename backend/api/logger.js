const fs = require("fs");

function logTransaction(tx) {
  const logEntry = `${new Date().toISOString()} - ${tx}\n`;
  fs.appendFileSync("transactions.log", logEntry);
}

module.exports = { logTransaction };
