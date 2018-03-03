const { get } = require('axios');

const getData = page => get(page).then(r => r.data);

module.exports = {
  getData,
};
