const { get } = require('axios');

// https://devcenter.heroku.com/articles/heroku-status#heroku-status-api-v3
const getCurrentStatus = () => get('https://status.heroku.com/api/v3/current-status');
const getSinceDate = date => get(`https://status.heroku.com/api/v3/issues?since=${date}`); // 2012-04-24
const getByNum = issueNum => get(`https://status.heroku.com/api/v3/issues/${issueNum}`);

module.exports = {
  getCurrentStatus,
  getSinceDate,
  getByNum,
};
