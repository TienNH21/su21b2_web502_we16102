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
/*
 * - Question: Nếu Person implements Workable thì Employee & Student có được coi là
 * implements Workable hay không?
 * - Answer :Có
 */
/*
 * 1 class chỉ cần có 1 phương thức abstract -> lớp đó cũng là abstract
 * Lớp trừu tượng (abstract class) không được dùng để khởi tạo đối tượng
 */
var Person = /** @class */ (function () {
    /*
     * Shorthand initializer
     * public constructor(private readonly id: number, private name: string) { ... }
     */
    function Person(id, name) {
        this._name = name;
        this._id = id;
    }
    Object.defineProperty(Person.prototype, "name", {
        // get: khai báo function là 1 getter
        get: function () {
            return this._name;
        },
        set: function (_name) {
            this._name = _name;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.getId = function () {
        return this._id;
    };
    Person.prototype.toString = function () {
        return this._id + " - " + this._name;
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, name, salary) {
        var _this = _super.call(this, id, name) || this;
        _this.salary = salary;
        Employee.tongSo++;
        return _this;
    }
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    Employee.prototype.setSalary = function (salary) {
        this.salary = salary;
    };
    Employee.prototype.toString = function () {
        return _super.prototype.toString.call(this) + " - " + this.salary;
    };
    Employee.prototype.workplace = function () {
        return "FPT";
    };
    /*
     * Lớp con kế thừa lớp abstract sẽ phải
     *  - thực thi lại các function abtract
     *  - hoặc cũng phải khai báo lớp con là abstract
     */
    Employee.prototype.doWork = function () {
        console.log("Coding...");
    };
    Employee.tongSo = 0;
    return Employee;
}(Person));
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Student.prototype.doWork = function () {
        console.log("Studying...");
    };
    return Student;
}(Person));
var e1 = new Employee(1, "TienNH21", 0);
var e2 = new Employee(2, "TienNH22", 0);
var e3 = new Employee(3, "TienNH23", 0);
console.log(Employee.tongSo);
