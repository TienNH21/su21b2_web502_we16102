"use strict";
var sayHello = function () {
    console.log("Hello Poly");
};
var sum;
sum = function (a, b) {
    return a + b;
};
var process = function (cb) {
    var x = 1;
    var y = 3;
    var result = cb(x, y);
    console.log(result);
};
// process( sayHello ); -> error
process(sum);
