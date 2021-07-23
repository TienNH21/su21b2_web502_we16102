/*
 * ? operator: đánh dấu 1 thuộc tính là optional (không bắt buộc).
 * Nếu class thực thi interface mà không định nghĩa lại thuộc tính -> undefined
 */
interface Named {
    readonly named?: string;
    outputName?: string;
}

interface Greetable extends Named {
    greet(name: string): void;
}

class MyPerson implements Greetable {
    public greet(name: string): void {
        console.log("Hello " + name);
    }
}

let user: Greetable;

user = new MyPerson();
user.greet("TienNH21");

console.log(user);
