/**
 * Uses the HN API as provided by firebase
 * https://github.com/HackerNews/API
 */

const { getPage } = require('../util');
const { getDistance } = require('./util');

const base = 'https://hacker-news.firebaseio.com/v0';

const getStories = () => getPage(`${base}/topstories.json?print=pretty`);

const getTopFive = async () => {
  const stories = await getStories();
  // trim down stories to only 5
  stories.splice(5);
  return Promise.all(stories.map(story => getPage(`${base}/item/${story}.json?print=pretty`)));
};

const parseStories = async () => {
  const stories = await getTopFive();
  return stories
    .map(({ title, url, time }) => ({
      title,
      link: url,
      published: getDistance(time * 1000),
    }));
};

module.exports = {
  getStories,
  getTopFive,
  parseStories,
};

