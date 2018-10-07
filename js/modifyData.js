const sampleData = require('./sampleData.json');
const _ = require('lodash');

const getQuote = key => _.get(sampleData, [key, 'quotes', 'USD']);
const cryptoIds = Object.keys(sampleData);
const getQuoteById = cryptoIds.map(key => getQuote(key));
const totalMarketCap = _.sumBy(getQuoteById, quote => quote.market_cap);
const totalVolume = _.sumBy(getQuoteById, quote => quote.volume_24h);

console.log(
  getQuoteById.map(quote =>
    Object.assign(
      {
        percentVolume: quote.volume_24h / totalVolume,
        percentMarketCap: quote.market_cap / totalMarketCap
      },
      sampleData
    )
  )
);
