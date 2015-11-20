// function statement
function greet() {
    console.log('Hi!');
}
greet();

// Functions are first-class
function logGretting(fn) {
    fn();
}
logGretting(greet);

// Function expression and this still first-class
var greetMe = function () {
    console.log('Hi again!');
};
greetMe();
// it's first-class
logGretting(greetMe);

// Use a function expression on the fly
logGretting(function(){
    console.log('Hi on the fly!');
});
