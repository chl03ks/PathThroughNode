'use strcit';
var express = require('express');

var app = express();
var port = process.env.PORT || 3000;

var people = [
    {
        name: 'Dan Garcia'
    },
    {
        name: 'Rick Garcia'
    },
    {
        name: 'Joe Garcia'
    },
];

app.set('view engine', 'jade');
app.use('/assets', express.static( __dirname + '/public'));
app.use('/bower', express.static( __dirname + '/bower_components'));

app.get('/', function (req, res) {

    res.render('index', {serverPeople: people});

});

app.listen(port);
