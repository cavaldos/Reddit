import os from  "os";

const getIPAddresses = {
  getip: () => {
    const networkInterfaces = os.networkInterfaces();
    const ipAddresses = [];
    Object.keys(networkInterfaces).forEach((interfaceName) => {
      const interfaces = networkInterfaces[interfaceName];
      interfaces.forEach((iface) => {
        if (iface.family === "IPv4" && !iface.internal) {
          ipAddresses.push(iface.address);
        }
      });
    });

    return ipAddresses;
  },
};

const IP = getIPAddresses.getip()
export default IP;