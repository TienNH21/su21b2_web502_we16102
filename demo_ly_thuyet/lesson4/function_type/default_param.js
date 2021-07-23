"use strict";
// param ?: <type> -> optional parameter
var increment;
// default parameter
increment = function (numb, base) {
    if (base === void 0) { base = 1; }
    return numb + base;
};
var num = 5;
var base = 5;
console.log(increment(num, base));
console.log(increment(100, undefined));
