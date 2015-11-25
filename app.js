var person = {
    firstName : 'Dan',
    lastName: 'Garcia',
    greet: function () {
        console.log("Hi " + this.firstName);
    },
};

var dan = Object.create(person);
dan.firstName = "Rick";
var rick = Object.create(person);
rick.firstName = "Riff";

dan.greet();
rick.greet();
