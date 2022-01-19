const net = require("net");
const connect = require('./client');

const commands = {
  w: "Move: up",
  a: "Move: left",
  s: "Move: down",
  d: "Move: right",
}

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
  if (key === 'w') {
    connection.write(commands.w);
  }
  if (key === 'a') {
    connection.write(commands.a);
  }
  if (key === 's') {
    connection.write(commands.s);
  }
  if (key === 'd') {
    connection.write(commands.d);
  }
  if (key === '\u0003') {
    process.exit();
  }
}

module.exports = {
  setupInput
};