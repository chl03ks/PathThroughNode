var events = require('events');
var eventConfig = require('./config').events;

var emtr = new events();

emtr.on(eventConfig.GREET,function(){
    console.log("Somewhere, some one said hello");
});

emtr.on(eventConfig.FILESAVE,function(){
    console.log("Somewhere, another a hellos");
});

emtr.emit('greet');
