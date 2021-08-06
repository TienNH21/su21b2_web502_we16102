import { Component } from "../Component.js";
import { User } from "../../Models/User.js";
import { UserAPI } from "../../api/UserAPI.js";

export class UserIndex extends Component {
  private listUser: User[];
  public constructor() {
    super();
    this.listUser = [];
  }

  public template(): string {
    return `
      <div class="col-10 offset-1 mt-5">
        <div class="row">
          <div class="col-6">
            <a class="btn btn-success" href="/users/create" data-navigo>Create</a>
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

  public async afterRender() {
    const response = await UserAPI.all();
    const data = await response.json();

    const tbodyContents: string = data.map((value: User, key: number) => {
      return `
        <tr>
          <td>${value.id}</td>
          <td>${value.name}</td>
          <td>${value.email}</td>
          <td>${value.birthday}</td>
          <td>
            <a
              data-navigo
              href="/#/users/edit/${value.id}"
              class="btn btn-primary">
              Update
            </a>
          </td>
          <td>
            <button id="btn_delete_${value.id}" data-id="${value.id}" class="btn btn-danger">
              Delete
            </button>
          </td>
        </tr>
      `;
    }).join('');

    // Event Delegation
    document.getElementById('tbl_users')!.innerHTML = tbodyContents;

    /*
     * button[id^='btn_delete_']:
     * Tìm tất cả các button, có thuộc tính id bắt đầu là btn_delete
     */
    const listBtn: NodeListOf<HTMLButtonElement> = document.querySelectorAll("button[id^='btn_delete_']");
    listBtn.forEach((btn) => {
      btn.addEventListener('click', function (event) {
        event.preventDefault();

        const id = +btn.dataset.id!;
        UserAPI.delete(id);
      });
    });
  }
}
