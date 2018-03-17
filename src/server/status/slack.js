const debug = require('debug')('dash:status:slack');
const { getDOM } = require('../util');

const baseUrl = 'https://status.slack.com/';

/**
 * scrape the slack status page
 * @return {Promise<object>} slack status
 */
const parseSlackStatus = async () => {
  const $ = await getDOM(baseUrl);
  debug('parsing slack status');
  const status = $($('.container h1')[0]).text();
  const statusMessage = $('.container h3').text();
  return { status, statusMessage };
};

module.exports = parseSlackStatus;
