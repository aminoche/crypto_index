const axios = require('axios');

//Sample Data Search => https://api.coinmarketcap.com/v2/ticker/?start=1&limit=100&sort=rank
const getMarketData = async (start = 1, limit = 100, sort = 'rank') => {
  try {
    const cryptosByMarketCap = await axios.get(
      `https://api.coinmarketcap.com/v2/ticker/?start=${start}&limit=${limit}&sort=${sort}`
    );
    return JSON.stringify(cryptosByMarketCap.data, null, 2);
  } catch (error) {
    console.error(error);
  }
};

const getGlobalData = async () => {
  try {
    const globalData = await axios.get(
      'https://api.coinmarketcap.com/v2/global/'
    );
    return JSON.stringify(globalData.data, null, 2);
  } catch (error) {
    console.error(error);
  }
};

// (async () => console.log(await getMarketData()))(); //MarketData
// (async () => console.log(await getGlobalData()))(); //GlobalData

module.exports = { getMarketData, getGlobalData };
