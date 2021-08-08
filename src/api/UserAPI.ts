import { User } from './../Models/User.js';

export class UserAPI {
  public static all() {
    const url: string = "http://localhost:3000/users";
    return fetch(url, { method: "GET" });
  }

  public static find(id: string) {
    const url: string = `http://localhost:3000/users/${ id }`;
    return fetch(url, { method: "GET" });
  }

  public static insert(user: User) {
    const url: string = "http://localhost:3000/users/";

    const data = {
      name: user.name,
      email: user.email,
      password: user.password,
      birthday: '2020-01-02',
    };

    return fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    });
  }

  public static update(user: User) {
    const url: string = `http://localhost:3000/users/${user.id}`;

    const data = {
      name: user.name,
      email: user.email,
      password: user.password,
      birthday: '2020-01-02',
    };

    return fetch(url, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    });
  }

  public static delete(id: number) {
    const url: string = `http://localhost:3000/users/${id}`;
    return fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    });
  }
}
