const os = require("os");

function getIPAddresses() {
  const networkInterfaces = os.networkInterfaces();
  const ipAddresses = [];

  Object.keys(networkInterfaces).forEach((interfaceName) => {
    const interfaces = networkInterfaces[interfaceName];
    interfaces.forEach((interface) => {
      if (interface.family === "IPv4" && !interface.internal) {
        ipAddresses.push(interface.address);
      }
    });
  });

  return ipAddresses;
}

module.exports = {
  getIPAddresses,
};
