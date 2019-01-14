/**
 * mapAppsByHost
 * @param {array} apps - Array of objects
 * @returns {object} - Map of hosts
 */
export default function mapAppsByHost(apps) {
  const map = {};
  for (let i = 0; i < apps.length; i++) {
    const app = apps[i];
    const { 
      name,
      contributors,
      version,
      apdex,
      host,
    } = app;

    for (let h = 0; h < host.length; h++) {
      const hostName = host[h];
      const data = {
        name,
        contributors,
        version,
        apdex
      };

      if (!map[hostName]) {
        map[hostName] = [];
      }

      map[hostName].push(data);
    }
  }
  
  return map;
};
