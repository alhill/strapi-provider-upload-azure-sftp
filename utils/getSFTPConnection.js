const SFTP = require('ssh2-sftp-client');

/**
 * Returns the connection with a SFTP host.
 *
 * @param {string} host
 * @param {string | number} port
 * @param {string} user
 * @param {string} password
 *
 * @returns {Promise}
 */

const getSFTPConnection =  async(host, port, username, password) => {
  const sftp = new SFTP();

  try {
    await sftp.connect({ host, port, username, password });
  } catch (e) {
    console.error(e);
  }

  return sftp;
}

module.exports = getSFTPConnection;
