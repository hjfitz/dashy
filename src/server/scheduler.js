/**
 * Note that we use promise.all and not async/await
 * this is so that we don't have a promise on the callback stack
 * and instead utilise the microtask queue
 */

const cron = require('node-cron');
const socket = require('./socket');
const news = require('./news');
const status = require('./status');
const system = require('./system');

const emitStatus = () => {
  Promise.all([
    status.contentful(),
    status.github(),
    status.slack(),
    status.heroku.getCurrentStatus(),
  ]).then(([contentful, github, slack, heroku]) => {
    socket.emit('status', {
      contentful,
      github,
      slack,
      heroku,
    });
  });
};

const emitNews = () => {
  Promise.all([
    news.getHackerNews(),
    news.getHackerNoon(),
    news.getPracticalDev(),
  ]).then(([hn, hnoon, tpd]) => {
    socket.emit({ hn, hnoon, tpd });
  });
};

const emitSys = () => {
  const sysInfo = system.getSystemInfo();
  socket.emit('system', sysInfo);
};

// update system status every 2 minutes
cron.schedule('*/2 * * * *', emitSys);

// update service status every 30 minutes
cron.schedule('*/30 * * * *', emitStatus);

// hourly news
cron.schedule('0 * * * *', emitNews);


// HACK HACK these two are horrible and can be implemented so much better
const emitAll = () => emitStatus().then(emitNews).then(emitSys);
module.exports = emitAll;
