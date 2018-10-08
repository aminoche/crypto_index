const axios = require('axios');

//Sample Data Search => https://api.coinmarketcap.com/v2/ticker/?start=1&limit=100&sort=rank
const sampleData = async (start = 1, limit = 100, sort = 'rank') => {
  try {
    const cryptosByMarketCap = await axios.get(
      //`https://api.coinmarketcap.com/v2/ticker/?start=${start}&limit=${limit}&sort=${sort}`
      'https://api.coinmarketcap.com/v2/ticker/?start=1&limit=100&sort=rank'
    );
    return cryptosByMarketCap.data;
  } catch (error) {
    console.error(error);
  }
};

//const returnedData = (async () => await sampleData())();

module.exports = { sampleData };
