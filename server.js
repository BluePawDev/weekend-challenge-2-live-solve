// Global
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');



// Listen
app.listen(7501, function() {
	// console.log('server listening on port 7501');
});

// Users
app.use(express.static('public'));

// Base URL
app.get('/', function(req, res) {
	console.log('Base URL hit');
	res.sendFile(path.resolve('views/index.html'))
});

app.use(bodyParser.urlencoded({
	extended: true
}));

// Recieve math request
app.post('/calculate', function(req, res) {
	console.log(req.body);
	var valueForRes = calculations(req.body);

});

function calculations(objectToCalc) {
	switch (objToCalc.type) {
		case 'add':
			return Number(objToCalc.x) + Number(objToCalc.y);
		case 'subtract':
			return Number(objToCalc.x) - Number(objToCalc.y);
		case 'multiply':
			return Number(objToCalc.x) * Number(objToCalc.y);
		case 'divide':
			return Number(objToCalc.x) / Number(objToCalc.y);
		default:
	}
}

// Send answer back
