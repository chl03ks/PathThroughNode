var greet = require('./greet');

greet();


// Objects Literals

var person = {
    firtsName: 'Dan',
    lastName: 'Garcia',
    greeting: function(){
        console.log("Hi " + this.firtsName + " " + this.lastName + "!");
    }
};

person.greeting();
