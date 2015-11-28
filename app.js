var Greeter = require('./greeter');

var  greeter = new  Greeter();

greeter.on('greet', function (data) {
    console.log('Some one Greeted! ' + data);
});

greeter.greet('Tony');
