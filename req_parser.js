/* 
	Request Header Parser Microservice for FreeCodeCamp
	by: Sergio Gaspar
	date: 2017/01/18
	
	Create miscroservice with the below user storie:
	
	US1: I can get the IP address, language and operating system for my browser.
*/
var express = require('express');
var useragent = require('express-useragent'); // npm install express-useragent --save 
var app = express();
var port = process.env.PORT || 3000;
var isDebug = false;

// Simple Log function to print to console
function Log(level, logStr) {
	if (isDebug && level === 'D') console.log("DEBUG: " + logStr);
	else if (level === 'I') console.log("INFO: " + logStr);
	else if (level === 'E') console.log("ERROR: " + logStr);
	else console.log(level + ": " + logStr);
};

// Handle the site icon request... return nothing
app.get('/favicon.ico', function(req, res) {
	res.writeHead(204);
	res.end();
});

// Express app handles all GET regardless of URL (no routing)
app.get('/', function(req, res) {

	// Get the IP address from the request header using the req object directly (may be a better way using FW)
	var ip = req.headers['x-forwarded-for'] ||
		req.connection.remoteAddress ||
		req.socket.remoteAddress ||
		req.connection.socket.remoteAddress;

	Log('D', 'IP: ' + ip);

	// Get the first language code from the request (again, may be a better way using FW)
	var lang = req.headers["accept-language"];
	lang = lang.substring(0, lang.indexOf(","));

	Log('D', 'LANG: ' + lang);

	// Get Software using express-useragent FW to make it "prettier"
	var ua = useragent.parse(req.headers['user-agent']);
	var soft = "OS: " + ua.os + " || Browser: " + ua.browser + " || Platform: " + ua.platform;

	Log('D', 'SOFT: ' + soft);

	// Write JSON object to result object
	res.writeHead(200);
	res.write(JSON.stringify({
		"ipaddress": ip,
		"language": lang,
		"software": soft
	}));
	res.end();

});

// Listen on port 3000 by default, IP defaults to 127.0.0.1
app.listen(port);

// Logs port it is running on
Log('I', 'Server running at http://127.0.0.1:' + port + '/');
