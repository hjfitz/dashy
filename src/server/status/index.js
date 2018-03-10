const contentful = require('./contentful');
const github = require('./github');
const heroku = require('./heroku');
const slack = require('./slack');

module.exports = {
  contentful,
  github,
  heroku,
  slack,
};
