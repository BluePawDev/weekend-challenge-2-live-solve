// Global
var express = require('express');
var app = express();
var path = require('path');



// Listen
app.listen(7501, function() {
	console.log('server listening on port 7501');
});

// Users
app.use(express.static('public'));

// Base URL
app.get('/', function(req, res) {
	console.log('Base URL hit');
	res.sendFile(path.resolve('views/index.html'));
});
