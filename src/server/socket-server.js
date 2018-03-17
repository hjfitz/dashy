const io = require('socket.io');
const debug = require('debug')('dash:socket');
const cron = require('node-cron');
const news = require('./news');
const status = require('./status');
const system = require('./system');

const sockets = [];

const emitAll = (type, payload) => {
  debug('emitting all');
  sockets.map(sck => sck.emit(type, payload));
};

/**
 * emit all the things
 * System info every 2 minutes because we don't have to do a lot of scraping
 * Statuspage every 30 because it's important
 * news every hour
 */
const curStatus = {
  status: {},
  system: {},
  news: {},
};

const updateServer = () => {
  debug('emitting all');
  emitAll('dash', curStatus);
};

const updateSys = () => {
  debug('updating system info');
  const sysInfo = system.getSystemInfo();
  curStatus.system = sysInfo;
  updateServer(); // emit here else on the hour we'd have 3 reflows and 3 events
};

const updateStatus = async () => {
  debug('updating system status');
  const [contentful, github, slack, heroku] = await Promise.all([
    status.contentful(),
    status.github(),
    status.slack(),
    status.heroku.getCurrentStatus(),
  ]);
  const st = {
    contentful, github, slack, heroku,
  };
  curStatus.status = st;
};

const updateNews = async () => {
  debug('updating news');
  const [hn, hnoon, tpd] = await Promise.all([
    news.getHackerNews(),
    news.getHackerNoon(),
    news.getPracticalDev(),
  ]);

  const newNews = { hn, hnoon, tpd };
  curStatus.news = newNews;
};

const init = async () => {
  await updateNews();
  await updateStatus();
  updateSys();
};

// update system status every 2 minutes
cron.schedule('*/2 * * * *', updateSys);

// update service status every 30 minutes
cron.schedule('*/30 * * * *', updateStatus);

// hourly news
cron.schedule('0 * * * *', updateNews);

init();

const conn = sck => {
  debug(`${sck.id} connected`);

  sockets.push(sck);

  debug(`${sockets.length} total sockets connected`);

  // respond to pings
  sck.on('keepalive', () => debug(`${sck.id} pinged`));

  sck.on('dash', () => {
    debug('request get');
    sck.emit('dash', curStatus);
  });

  sck.on('disconnect', () => {
    const index = sockets.indexOf(sck);
    if (index !== -1) sockets.splice(index, 1);
    debug(`${sck.id} disconnected.`);
    debug(`${sockets.length} sockets remain`);
  });
};

const bind = server => {
  // initialise the server
  const sock = io(server);
  debug('bound to server');
  // add event listeners
  sock.on('connection', conn);
};


module.exports = { bind, emitAll };
