var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Component } from "../Component.js";
import { User } from "../../Models/User.js";
var UserCreate = /** @class */ (function (_super) {
    __extends(UserCreate, _super);
    function UserCreate() {
        return _super.call(this) || this;
    }
    UserCreate.prototype.template = function () {
        return "\n      <div class=\"col-10 offset-1 mt-5\">\n        <form action=\"\" method=\"POST\" id=\"form_create\">\n          <div class=\"row mt-4\">\n            <label class=\"col-2\">H\u1ECD T\u00EAn</label>\n            <input type=\"text\" name=\"name\" id=\"name\" class=\"form-control col-10\" />\n          </div>\n          <div class=\"row mt-4\">\n            <label class=\"col-2\">Email</label>\n            <input type=\"email\" name=\"email\" id=\"email\" class=\"form-control col-10\" />\n          </div>\n          <div class=\"row mt-4\">\n            <label class=\"col-2\">M\u1EADt kh\u1EA9u</label>\n            <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control col-10\" />\n          </div>\n          <div class=\"row mt-4\">\n            <label class=\"col-2\">X\u00E1c nh\u1EADn m\u1EADt kh\u1EA9u</label>\n            <input type=\"password\" name=\"password_confirm\" id=\"password_confirm\" class=\"form-control col-10\" />\n          </div>\n          <div class=\"row mt-4\">\n            <label class=\"col-2\">Ng\u00E0y sinh</label>\n            <input type=\"date\" name=\"birthday\" id=\"birthday\" class=\"form-control col-10\" />\n          </div>\n          <div class=\"row mt-4\">\n            <button class=\"btn btn-primary\">Create</button>\n            <a class=\"btn btn-default\">Cancel</a>\n          </div>\n        </form>\n      </div>\n    ";
    };
    UserCreate.prototype.afterRender = function () {
        document.getElementById('form_create')
            .addEventListener('submit', function (event) {
            event.preventDefault();
            // Type Casting:
            // const inputName = <HTMLInputElement> document.getElementById("name"); /* C1 */
            var inputName = document.getElementById("name"); /* C2 */
            var name = inputName.value;
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;
            var password_confirm = document.getElementById("password_confirm").value;
            var birthdayStr = document.getElementById("birthday").value;
            var birthday = new Date(birthdayStr);
            if (password !== password_confirm) {
                // doSomething ...
            }
            var user = new User(0, name, email, password, birthday);
        });
    };
    UserCreate.getInstance = function () {
        return new UserCreate();
    };
    return UserCreate;
}(Component));
export { UserCreate };
