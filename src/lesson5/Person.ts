interface Workable {
    doWork(): void;
}

/*
 * - Question: Nếu Person implements Workable thì Employee & Student có được coi là
 * implements Workable hay không?
 * - Answer 1 :Có
 *
 * TODO:
 * - Answer 2: abstract?
 */
class Person {
    private readonly id: number;
    protected name: string;

    public constructor(id: number, name: string) {
        this.name = name;
        this.id = id;
    }

    public getName() {
        return this.name;
    }

    public setName(name: string) {
        this.name = name;
    }

    public getId() {
        return this.id;
    }

    public toString() : string {
        return `${this.id} - ${this.name}`;
    }
}

interface FptStaff {
    workplace(): string;
}

class Employee extends Person
    implements FptStaff, Workable {
    private salary: number;

    public constructor(id: number, name: string, salary: number) {
        super(id, name);
        this.salary = salary;
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

    public doWork(): void {
        console.log("Coding...");
    }
}

class Student extends Person implements Workable {
    public doWork(): void {
        console.log("Studying...");
    }
}

let e: Workable = new Employee(1, "TienNH21", 0);
e.doWork();
