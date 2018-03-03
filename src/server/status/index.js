const { parseContentfulPage: getContentfulStatus } = require('./contentful');
const {
  getCurrentStatus: getHerokuStatus,
  getByNum: getHerokuIssue,
} = require('./heroku');

module.exports = {
  getContentfulStatus,
  getHerokuStatus,
  getHerokuIssue,
};
