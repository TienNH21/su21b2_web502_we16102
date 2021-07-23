"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var person = {
    name: "TienNH21",
    age: 20,
    address: 'VN',
};
var employee = __assign(__assign({}, person), { salary: "5000 VND" });
// console.log(employee);
var diemTP = [6, 7, 8, 9, 9, 5, 7, 7];
var diemAll = __spreadArray(__spreadArray([], diemTP), [
    9,
    9
]);
console.log(diemAll);
/*
Spread Operator có thể dùng được trên Object & Array.
Sử dụng để lấy tất cả các thuộc tính (Object) / phần tử (Array)
*/
