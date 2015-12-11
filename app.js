'use strcit';
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'jade');

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/api',function (req, res) {
    res.json({ firstname: 'John', lastname: 'Dan'});
});

app.get('/person/:id',function (req, res) {
    res.render('person', { ID: req.params.id});
});


app.listen(port);
