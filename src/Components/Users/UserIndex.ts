/// <reference path="./../Component.ts" />
/// <reference path="./../../Models/User.ts" />

namespace App {
  export class UserIndex extends Component {
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
}
