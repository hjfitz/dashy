const { get } = require('axios');

const getPage = page => get(page).then(r => r.data);

module.exports = {
  getPage,
};
