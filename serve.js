const http = require('http');
const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const path = require('path');
const debug = require('debug')('http');

const socket = require('./src/server/socket');

// constants
let port = parseInt(process.env.PORT, 10) || 5000;

const app = express();
const pub = path.join(__dirname, 'public');
const index = path.join(pub, 'index.html');
const built = path.join(pub, 'build');
const server = http.createServer(app);

// middleware
app.use(compression());
app.use(helmet());
app.set('port', port);

// files
app.use('/public', express.static([pub, built]));

// logger
app.use('*', (req, res, next) => {
  const { originalUrl, method } = req;
  const status = res.statusCode;
  debug(`method: ${method} :: source: ${originalUrl} :: status: ${status}`);
  next();
});

app.get('*', (req, res) => res.sendFile(index));

server.listen(port);

// inform us of the running server
server.on('listening', () => {
  // don't bind the socket until the server's running
  socket.bind(server);
  debug(`Running on ${port}`);
});

// handle ports the lazy way
server.on('error', ({ code }) => {
  if (code === 'EADDRINUSE') {
    port += 1;
    debug('Error with port. Incrementing');
    server.listen(port);
  } else {
    throw new Error(code);
  }
});
