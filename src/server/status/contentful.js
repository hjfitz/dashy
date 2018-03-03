const cheerio = require('cheerio');
const { getPage } = require('../util');

const baseUrl = 'https://www.contentfulstatus.com/';

const getContentfulDOM = async () => {
  const contentfulPage = await getPage(baseUrl);
  const $ = cheerio.load(contentfulPage);
  const elems = $('.component-inner-container');
  return elems;
};

const getText = dom => dom.data.trim();

const parseContentfulPage = async () => {
  const elems = await getContentfulDOM();
  const data = Array.from(elems)
    // all data we require is stored in <span>
    .map(elem => elem.childNodes.filter(({ name }) => name === 'span').map(node => node.children))
    .reduce((statusObj, statusInfo) => {
      // messy destructure
      const [[service], [icon], [status]] = statusInfo;
      const index = getText(service);
      // there exists one status entry without an icon
      if (!status) {
        statusObj[index] = getText(icon);
      } else {
        statusObj[index] = getText(status);
      }
      return statusObj;
    }, {});
  return data;
};

// expose all modules for testing
module.exports = {
  getContentfulDOM,
  parseContentfulPage,
};
