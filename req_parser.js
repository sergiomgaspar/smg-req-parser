/* 
	Timestamp Microservice for FreeCodeCamp
	by: Sergio Gaspar
	date: 2017/01/17
	
	Create miscroservice with the below user stories:
	
	US1: I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).
	US2: If it does, it returns both the Unix timestamp and the natural language form of that date.
	US3: If it does not contain a date or Unix timestamp, it returns null for those properties.User
*/
var express = require('express');
//var fs = require('fs');
var url = require('url');
var app = express();
var port = process.env.PORT || 3000;
var isDebug = true;

// Simple Log function to print to console
function Log(level, logStr){
	if (isDebug && level === 'D') console.log("DEBUG: "+logStr);
		else if (level === 'I') console.log("INFO: "+logStr);
			else if (level === 'E') console.log("ERROR: "+logStr);
				else console.log(level+": "+logStr);
};

// Handle the site icon request... return nothing
app.get('/favicon.ico', function(req, res) {
	res.writeHead(204);
	res.end();
});

// Express app handles all GET regardless of URL (no routing)
app.get('/', function(req, res) {

	//var ip = res.connection.remoteAddress;
	var ip = req.connection.remoteAddress ||
		req.headers['x-forwarded-for'] || 
		req.socket.remoteAddress ||
		req.connection.socket.remoteAddress;
	Log('D','IP: '+ip);

	/*
		example:
		"ipaddress": "46.140.43.46",
		"language": "pt-PT",
		"software": "Windows NT 10.0; Win64; x64"
	*/
	res.writeHead(200);
	res.write(JSON.stringify({
		"ipaddress": ip,
		"language": null,
		"software": null
	}));
	res.end();
	
});

// Listen on port 3000 by default, IP defaults to 127.0.0.1
app.listen(port);

// Logs port it is running on
Log('I','Server running at http://127.0.0.1:' + port + '/');
// URL to execute:  http://npm.sergiomgaspar.c9users.io/
