var express = require ("express");

const PORT_NUMBER = 3003;

let server = express ();

/** Exposes the Express routes
    to the public **/
server.use ('/', express.static (__dirname + '/dist'));

/** Enable server
    and listen on given port number **/
server.listen (PORT_NUMBER, () => {
  console.log ('Express is listening on port ' + PORT_NUMBER);
});
