require("dotenv").config();

module.exports = {
    infuraApiKey: process.env.INFURA_API_KEY,
    mongoUri: process.env.MONGO_URI,
};
