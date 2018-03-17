const debug = require('debug')('dash:news:reddit');
const { getPage } = require('../util');
const { getDistance } = require('./util');

const boringSubs = [
  'self.',
  'i.redd',
  'imgur',
];

const getSubredditStories = async sub => {
  const url = `https://www.reddit.com/r/${sub}.json`;
  debug(`attempting to fetch from ${sub}`);
  const { data } = await getPage(url);
  debug('formatting server response - removing images');
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
  debug('formatting response from getSubredditStories');
  const formatted = filtered.map(({ title, url, created }) => ({
    title,
    link: url,
    published: getDistance(created * 1000),
  }));
  debug('resolving...');
  return formatted;
};

module.exports = {
  getSubredditStories,
  formatSubs,
};
