const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  conn.on('data', (data) => {
    console.log('Incoming data!', data);
  });
  conn.on('connect', () => {
    console.log('Successfully connected!');
  });
  conn.on('connect', () => {
    conn.write('Name: KYL');
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;