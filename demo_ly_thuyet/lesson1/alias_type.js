"use strict";
var combine1 = function (a, b) {
    if (typeof a == 'number' && typeof b == 'number') {
        return a + b;
    }
    else if (typeof a == 'string' && typeof b == 'string') {
        return a.toString() + b.toString();
    }
    else {
        return a && b;
    }
};
console.log(combine1(1, 2)); // 3
console.log(combine1('1', '2')); // 12
console.log(combine1('FPT', ' Polytechnic')); // FPT Polytechnic
console.log(combine1(true, false)); // false
/*
type myAliasType = string | boolean ...
*/
