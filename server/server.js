const port = 4000;
const apiUrl = '/api';

// Express
const bodyParser = require('body-parser');
const compression = require('compression');
const path = require('path');
const express = require('express');
var heroes = require('./routes/heroes.routes');
var app = express();

var html = path.join(__dirname, '../dist');
var nodes_modules = path.join(__dirname, '../node_modules');

app
    .use(compression())
    .use(bodyParser.json())
    // Static content
    .use(express.static(html))
    .use('/node_modules', express.static(nodes_modules))
    // api
    .use('/api/heroes', heroes)
    .all('/*', function(req, res) {
        res.sendFile(path.join(html, 'index.html'));
    })
    // 404
    .use(function (req, res, next) {
        var err = new Error('Not Found ' + req.url.toString());
        err.status = 404;
        next(err);
    })
    // Start server
    .listen(process.env.PORT || port, function () {
        console.log('Port: ' + port);
        console.log('Html: ' + html);
    });

module.exports = app;