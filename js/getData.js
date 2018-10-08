const axios = require('axios');

const sampleData = async (start = 1, limit = 100, sort = 'rank') => {
  try {
    const cryptosByMarketCap = await axios.get(
      `https://api.coinmarketcap.com/v2/ticker/?start=${start}&limit=${limit}&sort=${sort}`
    );
    return cryptosByMarketCap.data;
  } catch (error) {
    console.error(error);
  }
};

const returnedData = (async () => await sampleData())();

module.exports = { returnedData };
