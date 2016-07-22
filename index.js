#!/usr/bin/env node

var express = require("express"),
    app = express(),
    bodyParser = require('body-parser'),
    errorHandler = require('errorhandler'),
    methodOverride = require('method-override'),
    hostname = process.env.HOSTNAME || 'prebid-perf-test.herokuapp.com',
    port = parseInt(process.env.PORT, 10) || 80,
    publicDir = process.argv[2] || __dirname + '/',
    path = require('path');

app.get("/", function (req, res) {
  res.sendFile(path.join(publicDir, "/gpt-each-bidder3.html"));
});

app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(publicDir));
app.use(errorHandler({
  dumpExceptions: true,
  showStack: true
}));

console.log("Simple static server showing %s listening at http://%s:%s", publicDir, hostname, port);
app.listen(hostname, port);
