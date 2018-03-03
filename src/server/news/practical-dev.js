const { getFromRSS } = require('./util');

const baseUrl = 'https://dev.to/feed';

const getPracDev = () => getFromRSS(baseUrl);

module.exports = getPracDev;

