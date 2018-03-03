const { getFromRSS } = require('./util');

const baseUrl = 'https://hackernoon.com/feed';

const getHackerNoon = () => getFromRSS(baseUrl);

module.exports = getHackerNoon;
