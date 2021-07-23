interface Workable {
    doWork(): void;
}

/*
 * - Question: Nếu Person implements Workable thì Employee & Student có được coi là
 * implements Workable hay không?
 * - Answer :Có
 */

/*
 * 1 class chỉ cần có 1 phương thức abstract -> lớp đó cũng là abstract
 * Lớp trừu tượng (abstract class) không được dùng để khởi tạo đối tượng
 */
abstract class Person implements Workable {
    private readonly _id: number;
    protected _name: string;

    /*
     * Shorthand initializer
     * public constructor(private readonly id: number, private name: string) { ... }
     */
    public constructor(id: number, name: string) {
        this._name = name;
        this._id = id;
    }

    // get: khai báo function là 1 getter
    public get name() {
        return this._name;
    }

    public set name(_name: string) {
        this._name = _name;
    }

    public getId() {
        return this._id;
    }

    public toString() : string {
        return `${this._id} - ${this._name}`;
    }

    /*
     * Keyword abstract dùng để khai báo 1 class/1 function trừu tượng.
     * 1 function abstract(trừu tượng) là 1 function chưa thực thi phần thân hàm.
     */
    abstract doWork(): void;
}

interface FptStaff {
    workplace(): string;
}

class Employee extends Person implements FptStaff {
    private salary: number;
    public static tongSo: number = 0;

    public constructor(id: number, name: string, salary: number) {
        super(id, name);
        this.salary = salary;

        Employee.tongSo++;
    }

    public getSalary() {
        return this.salary;
    }

    public setSalary(salary: number) {
        this.salary = salary;
    }

    public toString() : string {
        return `${super.toString()} - ${this.salary}`;
    }

    public workplace(): string {
        return "FPT";
    }

    /*
     * Lớp con kế thừa lớp abstract sẽ phải
     *  - thực thi lại các function abtract
     *  - hoặc cũng phải khai báo lớp con là abstract
     */
    public doWork(): void {
        console.log("Coding...");
    }
}

class Student extends Person {
    public doWork(): void {
        console.log("Studying...");
    }
}

let e1: Employee = new Employee(1, "TienNH21", 0);
let e2: Employee = new Employee(2, "TienNH22", 0);
let e3: Employee = new Employee(3, "TienNH23", 0);

console.log( Employee.tongSo );

