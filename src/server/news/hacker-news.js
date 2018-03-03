/**
 * Uses the HN API as provided by firebase
 * https://github.com/HackerNews/API
 */

const { get } = require('axios');

const base = 'https://hacker-news.firebaseio.com/v0';

const getStories = () => get(`${base}/topstories.json?print=pretty`);

const getTopFive = async () => {
  const stories = await getStories();
  // trim down stories to only 5
  stories.splice(5);
  // no need to await Promise.all as this function returns a promise
  return stories.map(story => get(`${base}/item/${story}.json?print=pretty`));
};

module.exports = {
  getStories,
  getTopFive,
};
