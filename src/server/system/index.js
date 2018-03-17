const os = require('os');
const diskUsage = require('diskusage');
const debug = require('debug')('dash:system');


const getUsedMemory = () => {
  debug('getting memory status');
  const total = os.totalmem();
  const free = os.freemem();
  const used = total - free;
  return { used, free, total };
};

const getSystemInfo = () => {
  const mem = getUsedMemory();
  // this will fail on windows
  debug('getting storage');
  const root = diskUsage.checkSync('/');
  const home = diskUsage.checkSync(os.homedir());
  [root, home].forEach(partition => {
    partition.used = partition.total - partition.free;
    delete partition.available;
  });
  const disk = { root, home };
  return { mem, disk };
};

module.exports = { getSystemInfo };
