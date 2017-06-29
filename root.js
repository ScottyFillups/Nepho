let express = require("express");
let fonoapi = require("fonoapi-nodejs");

let app = express();

app.get("/", function(req, res) {
    fonoapi.token = "9aaca61f8fad680548561fd336228f508d5e24a6bde084cb";
    res.writeHead(200, {"Content-Type": "text/html"});

    fonoapi.getDevices(function(queryString, data) {
        for (prop in data[0]) {
            res.write("<p>" + prop + " : " + data[0][prop] + "</p>");
        }
    }, "iphone 6S");
}).listen(8080);
