import { Component } from "../Component.js";
import { User } from "../../Models/User.js";

export class UserCreate extends Component {
  public constructor() {
    super();
  }

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

  public static getInstance(): Component {
    return new UserCreate();
  }
}
