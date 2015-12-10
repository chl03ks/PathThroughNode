'use strcit';
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.send("<html><head><link href=assets/style.css type=text/css rel=stylesheet></head><body><h1>Hi</h1></body></html>");
});

app.get('/api',function (req, res) {
    res.json({ firstname: 'John', lastname: 'Dan'});
});

app.get('/person/:id',function (req, res) {
    res.send('<html><head></head><body><h1>Hi: '+ req.params.id +'</h1></body></html>');
});


app.listen(port);
