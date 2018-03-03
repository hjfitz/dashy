const Parser = require('rss-parser');
const distanceInWords = require('date-fns/distance_in_words');

const parser = new Parser();

const getDistance = time => distanceInWords(new Date(), new Date(time), { addSuffix: true });

const getFromRSS = async baseUrl => {
  const { items } = await parser.parseURL(baseUrl);
  items.splice(5);
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
