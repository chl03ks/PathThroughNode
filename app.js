'use strcit';
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 3000;

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({extended: false});


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

app.post('/person', urlencodedParser , function (req, res) {
    res.send('Thank You');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});

app.post('/personjson', jsonParser , function (req, res) {
    res.send('JSON DATA!');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});

app.listen(port);
