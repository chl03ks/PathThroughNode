'use strcit';
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send("<html><head></head><body><h1>Hi</h1></body></html>");
});

app.get('/api',function (req, res) {
    res.json({ firstname: 'John', lastname: 'Dan'});
});

app.listen(port);
