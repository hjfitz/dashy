const io = require('socket.io');
const debug = require('debug')('socket');

const sockets = [];

const emit = (type, payload) => {
  sockets.map(sck => sck.emit(type, payload));
};

const conn = sck => {
  debug(`${sck.id} connected`);

  sockets.push(sck);

  debug(`${sockets.length} total sockets connected`);

  // respond to pings
  sck.on('keepalive', () => debug(`${sck.id} pinged`));

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

module.exports = { bind, emit };
