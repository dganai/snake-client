const net = require('net');
const {IP, PORT, NAME} = require('./constants');
// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT // PORT number here,
  });



  // eevent handler when connected
  conn.on('connect', () => {
    console.log("You have connected to the game server");
    conn.write(NAME);

  });

  // commands for moving
  // setInterval(() => {
  // conn.write('Move: up');
  // }, 40);


  // even handler for when program is idle
  conn.on('data', (input) => {
    console.log(input);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");



  return conn;
};



module.exports = { connect };