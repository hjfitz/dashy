const os = require('os');
const diskUsage = require('diskusage');


const getUsedMemory = () => {
  const total = os.totalmem();
  const free = os.freemem();
  const available = total - free;
  return { available, free, total };
};

const getSystemInfo = () => {
  const mem = getUsedMemory();
  // this will fail on windows
  const root = diskUsage.checkSync('/');
  const home = diskUsage.checkSync(os.homedir());
  const disk = { root, home };
  return { mem, disk };
};

module.exports = getSystemInfo;
