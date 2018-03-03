const { parseStories: getHackerNews } = require('./hacker-news');
const getHackerNoon = require('./hacker-noon');
const getPracticalDev = require('./practical-dev');
const { formatSubs: getBySub } = require('./reddit');

const getBySubs = (...subs) => Promise.all(subs.map(getBySub));

module.exports = {
  getHackerNews,
  getHackerNoon,
  getPracticalDev,
  getBySubs,
  getBySub,
};
