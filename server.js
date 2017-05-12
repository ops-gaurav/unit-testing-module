var express = require ('express');
var bodyParser = require( 'body-parser');
var morgan = require ('morgan');

var account = require('./routes/Account');

let app = express();

app.use (morgan ('combined'));
app.use (bodyParser.json());

// mapping routes
app.use ('/api/account', account);

app.listen (8900);
console.log ('Listening on port '+ 8900);

module.exports = app;	// for testing