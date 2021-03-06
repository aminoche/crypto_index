const sampleData = require('./sampleData.json');
const { getMarketData, getGlobalData } = require('./getData');
const _ = require('lodash');
const cl = variable => console.log(JSON.stringify(variable, null, 2));

//get the total market volume and market cap
const cryptoIds = Object.keys(sampleData);
const getQuote = key => _.get(sampleData, [key, 'quotes', 'USD']);
const getQuoteById = cryptoIds.map(key => getQuote(key));
const totalMarketCap = _.sumBy(getQuoteById, quote => quote.market_cap);
const totalVolume = _.sumBy(getQuoteById, quote => quote.volume_24h);

//set the Volume and Market Cap Percents
const setVolumeAndMarketPercent = key => {
  _.setWith(
    key,
    ['percent_of_total_volume'],
    Number(((key.quotes.USD.volume_24h / totalVolume) * 100).toFixed(2))
  );
  _.setWith(
    key,
    ['percent_of_total_market'],
    Number(((key.quotes.USD.market_cap / totalMarketCap) * 100).toFixed(2))
  );
  return key;
};
const volumeAndMarketCapPercent = cryptoIds.map(key => {
  return setVolumeAndMarketPercent(sampleData[key]);
});

cl(volumeAndMarketCapPercent);
console.log(
  'Percent of Total Market Cap =>',
  totalMarketCap / total_market_cap
);
console.log('Percent of Total Volume => ', totalVolume / total_volume_24h);
