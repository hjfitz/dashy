const os = require('os');
const diskUsage = require('diskusage');
const debug = require('debug')('dash:system');


const getUsedMemory = () => {
  debug('getting memory status');
  const total = os.totalmem();
  const free = os.freemem();
  const available = total - free;
  return { available, free, total };
};

const getSystemInfo = () => {
  const mem = getUsedMemory();
  // this will fail on windows
  debug('getting storage');
  const root = diskUsage.checkSync('/');
  const home = diskUsage.checkSync(os.homedir());
  const disk = { root, home };
  return { mem, disk };
};

module.exports = { getSystemInfo };
