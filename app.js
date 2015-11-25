var util = require('util');

var name = "Tony";
var greet = util.format("Hello, %s", name);

util.log(greet);
