let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};
const handleUserInput = function(data) {
  if (data === '\u0003') {
    process.exit();
  }
  if (data === 'w') {
    connection.write(w = 'Move: up');
  }
  if (data === 'a') {
    connection.write(w = 'Move: left');
  }
  if (data === 's') {
    connection.write(w = 'Move: down');
  }
  if (data === 'd') {
    connection.write(w = 'Move: right');
  }
};
module.exports = setupInput;