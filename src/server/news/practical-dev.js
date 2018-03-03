const Parser = require('rss-parser');
const { distanceInWords } = require('date-fns');

const parser = new Parser();
const baseUrl = 'https://dev.to/feed';

const getStories = async () => {
  const { items } = await parser.parseURL(baseUrl);
  items.splice(5);
  return items.map(({ title, link, pubDate }) => ({
    title,
    link,
    published: distanceInWords(new Date(), new Date(pubDate), { addSuffix: true }),
  }));
};

module.exports = getStories;
