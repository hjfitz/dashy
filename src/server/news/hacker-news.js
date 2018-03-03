/**
 * Uses the HN API as provided by firebase
 * https://github.com/HackerNews/API
 */

const axois = require('axios');

const base = 'https://hacker-news.firebaseio.com/v0';

const getStories = () => axios.get(`${base}/topstories.json?print=pretty`);

const getTopFive = async () => {
  const stories = await getStories();
  // trim down stories to only 5
  stories.splice(5);
  // no need to await Promise.all as this function returns a promise
  return stories.map(story => axios.get(`${base}/item/${story}.json?print=pretty`));
};

module.exports = {
  getStories,
  getTopFive,
};
