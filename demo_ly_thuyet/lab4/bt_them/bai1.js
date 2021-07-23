"use strict";
// http://heho-easj.dk/HTML5&JSF2017/Exercise1-TypeScript.html
var VATCalculator = /** @class */ (function () {
    function VATCalculator() {
    }
    VATCalculator.prototype.calculate = function (amount) {
        return amount * 1.25;
    };
    return VATCalculator;
}());
var vat = new VATCalculator();
console.log(vat.calculate(100));
// this.balance = balance ? balance : 0;
