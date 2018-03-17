const debug = require('debug')('dash:status:github');
const { getDOM } = require('../util');

const baseUrl = 'https://status.github.com/messages';

const parseMessage = message => {
  debug('parsing message');
  const [time, status] = Array.from(message.children)
    .filter(child => child.children)
    .map(child => child.children[0])
    .map(child => child.data);
  debug('resolving');
  return { time, status };
};

const getGithubStatus = async () => {
  const $ = await getDOM(baseUrl);
  const messages = $('.message');
  const casted = Array.from(messages);
  casted.splice(5);
  debug('attempting to parse status');
  return casted.map(parseMessage);
};

module.exports = getGithubStatus;
