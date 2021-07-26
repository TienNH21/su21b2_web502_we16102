interface IComponent {
    render: () => void;
    template: () => string;
    afterRender: () => void;
}

abstract class Component implements IComponent {
    public render() {
        /*
         * Thêm dấu ! sau querySelector
         * => thông báo với TypeScript: chắc chắn có 1 phần tử trên dom có id là root
         * & document.querySelector('#root') không bao giờ null
         */

        // Hiển thị giao diện
        document.querySelector('#root')!.innerHTML =  this.template();

        // Xử lý
        // await this.afterRender();
    }

    public abstract afterRender(): void;
    public abstract template(): string;
}

class User {
    private _id: number;
    private _name: string;
    private _birthday: Date;
    private _email: string;
    private _password: string;

    public constructor (_id: number, _name: string, _email: string, _password: string, _birthday: Date) {
        this._id = _id;
        this._name = _name;
        this._email = _email;
        this._password = _password;
        this._birthday = _birthday;
    }

    get id(): number {
        return this._id;
    }

    set id(_id: number) {
        this._id = _id;
    }

    get name(): string {
        return this._name;
    }

    set name(_name: string) {
        this._name = _name;
    }

    get email(): string {
        return this._email;
    }

    set email(_email: string) {
        this._email = _email;
    }

    get password(): string {
        return this._password;
    }

    set password(_password: string) {
        this._password = _password;
    }

    get birthday(): Date {
        return this._birthday;
    }

    set birthday(_birthday: Date) {
        this._birthday = _birthday;
    }
}

class UserIndex extends Component {
    private listUser: User[];
    public constructor() {
        super();
        this.listUser = [];

        this.fakeData();
    }

    private fakeData() : void {
        let u1: User = new User(1, "Ng Van A", "anvph1@fpt.edu.vn", "123456", new Date()),
            u2: User = new User(2, "Ng Van B", "bnvph1@fpt.edu.vn", "123456", new Date()),
            u3: User = new User(3, "Ng Van C", "cnvph1@fpt.edu.vn", "123456", new Date());

        this.listUser.push(u1);
        this.listUser.push(u2);
        this.listUser.push(u3);
    }

    public template(): string {
        return `
            <div class="col-10 offset-1 mt-5">
                <div class="row">
                    <div class="col-6">
                        <a class="btn btn-success">Create</a>
                    </div>
                    <div class="col-6"></div>
                </div>
                <table class="table table-dark mt-4">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Họ tên</td>
                            <td>Email</td>
                            <td>Ngày sinh</td>
                            <td colspan="2">Thao tác</td>
                        </tr>
                    </thead>
                    <tbody id="tbl_users"></tbody>
                </table>
            </div>
        `;
    }

    public afterRender(): void {
        const tbodyContents: string = this.listUser.map((value, key) => {
            return `
                <tr>
                    <td>${value.id}</td>
                    <td>${value.name}</td>
                    <td>${value.email}</td>
                    <td>${value.birthday}</td>
                    <td>
                        <a class="btn btn-primary">
                            Update
                        </a>
                    </td>
                    <td>
                        <button class="btn btn-danger">
                            Delete
                        </button>
                    </td>
                </tr>
            `;
        }).join('');

        // Event Delegation
        document.getElementById('tbl_users')!.innerHTML = tbodyContents;
    }
}

class UserCreate extends Component {
    public template(): string {
        return `
            <div class="col-10 offset-1 mt-5">
                <form action="" method="POST" id="form_create">
                    <div class="row mt-4">
                        <label class="col-2">Họ Tên</label>
                        <input type="text" name="name" id="name" class="form-control col-10" />
                    </div>
                    <div class="row mt-4">
                        <label class="col-2">Email</label>
                        <input type="email" name="email" id="email" class="form-control col-10" />
                    </div>
                    <div class="row mt-4">
                        <label class="col-2">Mật khẩu</label>
                        <input type="password" name="password" id="password" class="form-control col-10" />
                    </div>
                    <div class="row mt-4">
                        <label class="col-2">Xác nhận mật khẩu</label>
                        <input type="password" name="password_confirm" id="password_confirm" class="form-control col-10" />
                    </div>
                    <div class="row mt-4">
                        <label class="col-2">Ngày sinh</label>
                        <input type="date" name="birthday" id="birthday" class="form-control col-10" />
                    </div>
                    <div class="row mt-4">
                        <button class="btn btn-primary">Create</button>
                        <a class="btn btn-default">Cancel</a>
                    </div>
                </form>
            </div>
        `;
    }

    public afterRender(): void {
        document.getElementById('form_create')!
            .addEventListener('submit', (event) => {
                event.preventDefault();

                // Type Casting:
                // const inputName = <HTMLInputElement> document.getElementById("name"); /* C1 */
                const inputName = document.getElementById("name") as HTMLInputElement;   /* C2 */
                const name: string = inputName.value;

                const email: string = (<HTMLInputElement> document.getElementById("email")).value;
                const password: string = (<HTMLInputElement> document.getElementById("password")).value;
                const password_confirm: string = (<HTMLInputElement> document.getElementById("password_confirm")).value;
                const birthdayStr: string = (<HTMLInputElement> document.getElementById("birthday")).value;
                const birthday: Date = new Date(birthdayStr);

                if (password !== password_confirm) {
                    // doSomething ...
                }

                let user: User = new User(0, name, email, password, birthday);
            });
    }
}

// router
let gui: Component = new UserCreate();
gui.render();
