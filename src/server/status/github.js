const cheerio = require('cheerio');
const { getPage } = require('../util');

const baseUrl = 'https://status.github.com/messages';

const loadGitPage = async () => {
  const page = await getPage(baseUrl);
  return cheerio.load(page);
};

const parseMessage = message => {
  const [time, status] = Array.from(message.children)
    .filter(child => child.children)
    .map(child => child.children[0])
    .map(child => child.data);

  return { time, status };
};


const getGithubStatus = async () => {
  const $ = await loadGitPage();
  const messages = $('.message');
  const casted = Array.from(messages);
  casted.splice(5);
  return casted.map(parseMessage);
};

module.exports = getGithubStatus;
