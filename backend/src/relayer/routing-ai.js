const axios = require("axios");

async function findOptimalRoute(fromChain, toChain, amount) {
  const response = await axios.get(`https://ai-routing-api.com/route`, {
    params: { from: fromChain, to: toChain, amount },
  });

  return response.data.bestRoute;
}

module.exports = { findOptimalRoute };
