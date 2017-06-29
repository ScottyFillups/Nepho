let http = require("http");
let fonoapi = require("fonoapi-nodejs");

http.createServer(function(req, res) {
    res.writeHead(200, {"Content-type": "text/html"});
    fonoapi.token = "9aaca61f8fad680548561fd336228f508d5e24a6bde084cb";
    
    fonoapi.getDevices(function(queryString, data) {
        res.write("<p>" + JSON.stringify(data[0]) + "</p>");        
    }, "iphone 6S");
}).listen(8080);
