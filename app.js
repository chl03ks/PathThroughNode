var Emitter = require('./emmitter');

var emtr = new Emitter();

emtr.on('greet',function(){
    console.log("Somewhere, some one said hello");
});

emtr.on('greet',function(){
    console.log("Somewhere, another a hellos");
});

emtr.emit('greet');
