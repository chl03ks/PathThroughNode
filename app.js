'use strcit';
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://test:test@ds027335.mongolab.com:27335/addresbook');

var Schema = mongoose.Schema;

var personSchema = new Schema({
    firstname: String,
    lastname: String,
    address: String,
});

var person = mongoose.model('Person', personSchema);

var jonh = person({
    firstname: 'John',
    lastname: 'Doe',
    address: '55 Main St.'
});

jonh.save(function (err) {
    if(err) throw err;
    console.log('Person Save');
});

var app = express();
var port = process.env.PORT || 3000;

app.set('view engine', 'jade');

app.get('/', function (req, res) {

    person.find({}, function (err, users) {
        if (err) throw err;
        console.log(users);
    });
    res.render('index');

});


app.listen(port);
