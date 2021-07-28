"use strict";
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
// // router
// let gui: Component = new UserCreate();
// gui.render();
/// <reference path="./IComponent.ts">
var App;
(function (App) {
    var Component = /** @class */ (function () {
        function Component() {
        }
        Component.prototype.render = function () {
            /*
              * Thêm dấu ! sau querySelector
              * => thông báo với TypeScript: chắc chắn có 1 phần tử trên dom có id là root
              * & document.querySelector('#root') không bao giờ null
              */
            // Hiển thị giao diện
            document.querySelector('#root').innerHTML = this.template();
            // Xử lý
            // await this.afterRender();
        };
        return Component;
    }());
    App.Component = Component;
})(App || (App = {}));
/// <reference path="./../Component.ts">
/// <reference path="./../../Models/User.ts">
var App;
(function (App) {
    var UserCreate = /** @class */ (function (_super) {
        __extends(UserCreate, _super);
        function UserCreate() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        UserCreate.prototype.template = function () {
            return "\n        <div class=\"col-10 offset-1 mt-5\">\n          <form action=\"\" method=\"POST\" id=\"form_create\">\n            <div class=\"row mt-4\">\n              <label class=\"col-2\">H\u1ECD T\u00EAn</label>\n              <input type=\"text\" name=\"name\" id=\"name\" class=\"form-control col-10\" />\n            </div>\n            <div class=\"row mt-4\">\n              <label class=\"col-2\">Email</label>\n              <input type=\"email\" name=\"email\" id=\"email\" class=\"form-control col-10\" />\n            </div>\n            <div class=\"row mt-4\">\n              <label class=\"col-2\">M\u1EADt kh\u1EA9u</label>\n              <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control col-10\" />\n            </div>\n            <div class=\"row mt-4\">\n              <label class=\"col-2\">X\u00E1c nh\u1EADn m\u1EADt kh\u1EA9u</label>\n              <input type=\"password\" name=\"password_confirm\" id=\"password_confirm\" class=\"form-control col-10\" />\n            </div>\n            <div class=\"row mt-4\">\n              <label class=\"col-2\">Ng\u00E0y sinh</label>\n              <input type=\"date\" name=\"birthday\" id=\"birthday\" class=\"form-control col-10\" />\n            </div>\n            <div class=\"row mt-4\">\n              <button class=\"btn btn-primary\">Create</button>\n              <a class=\"btn btn-default\">Cancel</a>\n            </div>\n          </form>\n        </div>\n      ";
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
                var user = new App.User(0, name, email, password, birthday);
            });
        };
        return UserCreate;
    }(App.Component));
    App.UserCreate = UserCreate;
})(App || (App = {}));
/// <reference path="./../Component.ts">
/// <reference path="./../../Models/User.ts">
var App;
(function (App) {
    var UserIndex = /** @class */ (function (_super) {
        __extends(UserIndex, _super);
        function UserIndex() {
            var _this = _super.call(this) || this;
            _this.listUser = [];
            _this.fakeData();
            return _this;
        }
        UserIndex.prototype.fakeData = function () {
            var u1 = new App.User(1, "Ng Van A", "anvph1@fpt.edu.vn", "123456", new Date()), u2 = new App.User(2, "Ng Van B", "bnvph1@fpt.edu.vn", "123456", new Date()), u3 = new App.User(3, "Ng Van C", "cnvph1@fpt.edu.vn", "123456", new Date());
            this.listUser.push(u1);
            this.listUser.push(u2);
            this.listUser.push(u3);
        };
        UserIndex.prototype.template = function () {
            return "\n        <div class=\"col-10 offset-1 mt-5\">\n          <div class=\"row\">\n            <div class=\"col-6\">\n              <a class=\"btn btn-success\">Create</a>\n            </div>\n            <div class=\"col-6\"></div>\n          </div>\n          <table class=\"table table-dark mt-4\">\n            <thead>\n              <tr>\n                <td>Id</td>\n                <td>H\u1ECD t\u00EAn</td>\n                <td>Email</td>\n                <td>Ng\u00E0y sinh</td>\n                <td colspan=\"2\">Thao t\u00E1c</td>\n              </tr>\n            </thead>\n            <tbody id=\"tbl_users\"></tbody>\n          </table>\n        </div>\n      ";
        };
        UserIndex.prototype.afterRender = function () {
            var tbodyContents = this.listUser.map(function (value, key) {
                return "\n          <tr>\n            <td>" + value.id + "</td>\n            <td>" + value.name + "</td>\n            <td>" + value.email + "</td>\n            <td>" + value.birthday + "</td>\n            <td>\n              <a class=\"btn btn-primary\">\n                Update\n              </a>\n            </td>\n            <td>\n              <button class=\"btn btn-danger\">\n                Delete\n              </button>\n            </td>\n          </tr>\n        ";
            }).join('');
            // Event Delegation
            document.getElementById('tbl_users').innerHTML = tbodyContents;
        };
        return UserIndex;
    }(App.Component));
    App.UserIndex = UserIndex;
})(App || (App = {}));
var App;
(function (App) {
    var User = /** @class */ (function () {
        function User(_id, _name, _email, _password, _birthday) {
            this._id = _id;
            this._name = _name;
            this._email = _email;
            this._password = _password;
            this._birthday = _birthday;
        }
        Object.defineProperty(User.prototype, "id", {
            get: function () {
                return this._id;
            },
            set: function (_id) {
                this._id = _id;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(User.prototype, "name", {
            get: function () {
                return this._name;
            },
            set: function (_name) {
                this._name = _name;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(User.prototype, "email", {
            get: function () {
                return this._email;
            },
            set: function (_email) {
                this._email = _email;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(User.prototype, "password", {
            get: function () {
                return this._password;
            },
            set: function (_password) {
                this._password = _password;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(User.prototype, "birthday", {
            get: function () {
                return this._birthday;
            },
            set: function (_birthday) {
                this._birthday = _birthday;
            },
            enumerable: false,
            configurable: true
        });
        return User;
    }());
    App.User = User;
})(App || (App = {}));
