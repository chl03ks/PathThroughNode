function greet(callback) {
    console.log('Hello!');
    var data = {
        name: "Daniel",
    };
    callback(data);
}

greet(function(data){
    console.log('CallBaclk was invoked');
    console.log(data);
});

greet(function(data){
    console.log('a different function was invoked');
    console.log(data.name);
});
