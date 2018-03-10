const { get } = require('axios');
const cheerio = require('cheerio');

const getPage = page => get(page).then(r => r.data);

const getDOM = page => getPage(page).then(cheerio.load);

module.exports = {
  getPage,
  getDOM,
};
