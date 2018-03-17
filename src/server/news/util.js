const Parser = require('rss-parser');
const debug = require('debug')('dash:news:rss');
const distanceInWords = require('date-fns/distance_in_words');

const parser = new Parser();

const getDistance = time => distanceInWords(new Date(), new Date(time), { addSuffix: true });

const getFromRSS = async baseUrl => {
  debug(`attempting to fetch ${baseUrl}`);
  const { items } = await parser.parseURL(baseUrl);
  items.splice(5);
  debug('parsing server response and resolving');
  return items.map(({ title, link, pubDate }) => ({
    title,
    link,
    published: getDistance(pubDate),
  }));
};

module.exports = {
  getFromRSS,
  getDistance,
};
