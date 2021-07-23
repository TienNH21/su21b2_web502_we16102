"use strict";
var MyPerson = /** @class */ (function () {
    function MyPerson() {
    }
    MyPerson.prototype.greet = function (name) {
        console.log("Hello " + name);
    };
    return MyPerson;
}());
var user;
user = new MyPerson();
user.greet("TienNH21");
console.log(user);
