var express = require('express');
var fonoapi = require('fonoapi-nodejs');
var router = express.Router();

/* GET home page. */

router.get("/", function(req, res) {
    fonoapi.token = "9aaca61f8fad680548561fd336228f508d5e24a6bde084cb";
    fonoapi.getDevices(function(queryString, data) {
        res.render('index', {phone: data});
    }, "iphone 6S");
});
router.post("/", function(req, res) {
    fonoapi.token = "9aaca61f8fad680548561fd336228f508d5e24a6bde084cb";
    fonoapi.getDevices(function(queryString, data) {
        res.render('index', {phone: data});
    }, req.body.search);
});

module.exports = router;
