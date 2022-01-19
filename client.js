const net = require('net');

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243', // IP address here,
    port: 50541 // PORT number here,
  });



  // interpret incoming data as text
  conn.setEncoding("utf8");

  // eevent handler when connected
  conn.on('connect', () => {
    console.log("You have connected to the game server");
    conn.write('Name: DG');

  });

// commands for moving
 // setInterval(() => {
 // conn.write('Move: up');
 // }, 40);


  // even handler for when program is idle
  conn.on('data', (input) => {
    console.log(input);
  });

  return conn;
};



module.exports = {connect};