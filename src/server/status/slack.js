const { getDOM } = require('../util');

const baseUrl = 'https://status.slack.com/';

const parseSlackStatus = async () => {
  const $ = await getDOM(baseUrl);
  // console.log($);
  const status = $($('.container h1')[0]).text();
  const statusMessage = $('.container h3').text();
  return { status, statusMessage };
};

module.exports = parseSlackStatus;
