const { getPage } = require('../util');
const { getDistance } = require('./util');

const boringSubs = [
  'self.',
  'i.redd',
  'imgur',
];

const getSubredditStories = async sub => {
  const url = `https://www.reddit.com/r/${sub}.json`;
  const { data } = await getPage(url);
  const parsed = data.children
    .map(post => post.data)
    .filter(post =>
      !boringSubs
        .map(domain => post.domain.includes(domain))
        .reduce((bool, cur) => bool || cur, false));
  parsed.splice(5);
  return parsed;
};

const formatSubs = async sub => {
  const filtered = await getSubredditStories(sub);
  const formatted = filtered.map(({ title, url, created }) => ({
    title,
    link: url,
    published: getDistance(created * 1000),
  }));
  return formatted;
};

module.exports = {
  getSubredditStories,
  formatSubs,
};
