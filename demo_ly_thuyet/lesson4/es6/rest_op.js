"use strict";
// Rest Operator
var trungBinhCong = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var sum = 0;
    var count = 0;
    console.log(numbers);
    numbers.forEach(function (element) {
        sum += element;
        count++;
    });
    return sum / count;
};
console.log(trungBinhCong(6, 7, 8, 9, 9, 5, 7, 7));
