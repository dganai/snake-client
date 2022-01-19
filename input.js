const net = require("net");
const connect = require('./client');
const { MOVE_RIGHT, MOVE_UP, MOVE_LEFT, MOVE_DOWN  } = require('./constants');



let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === MOVE_UP) {
    connection.write('Move: up');
  }
  if (key === MOVE_LEFT) {
    connection.write('Move: left');
  }
  if (key === MOVE_DOWN) {
    connection.write('Move: down');
  }
  if (key === MOVE_RIGHT) {
    connection.write('Move: right');
  }
 
};

module.exports = {
  setupInput
};