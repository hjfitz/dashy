/**
 * Uses the HN API as provided by firebase
 * https://github.com/HackerNews/API
 */

const { get } = require('axios');
const distanceInWords = require('date-fns/distance_in_words');

const base = 'https://hacker-news.firebaseio.com/v0';

const getStories = () => get(`${base}/topstories.json?print=pretty`);

const getTopFive = async () => {
  const { data: stories } = await getStories();
  // trim down stories to only 5
  stories.splice(5);
  return Promise.all(stories.map(story => get(`${base}/item/${story}.json?print=pretty`)));
};

const parseStories = async () => {
  const stories = await getTopFive();
  return stories
    .map(({ data }) => data)
    .map(({ title, url, time }) => ({
      title,
      link: url,
      published: distanceInWords(new Date(), new Date(time * 1000), { addSuffix: true }),
    }));
};

module.exports = {
  getStories,
  getTopFive,
};

parseStories().then(console.log);
