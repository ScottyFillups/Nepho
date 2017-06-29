let fonoapi = require("fonoapi-nodejs");
fonoapi.token = "9aaca61f8fad680548561fd336228f508d5e24a6bde084cb";
fonoapi.getDevices(callback, "iphone 6S");

function callback(queryString, data) {
    console.log(data);
}
