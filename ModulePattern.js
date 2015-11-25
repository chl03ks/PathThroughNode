// a revaling module patter:
// Exposing only the properties and methosd you want via an a return object
// a very common and clean way to strucutred and protect code within modules


var greeting = "Hello World! ";

function greet(){
    console.log(greeting);
}

module.exports = {
    greet: greet
};
