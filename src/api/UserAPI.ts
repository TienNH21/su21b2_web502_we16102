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
    // const url: string = "http://localhost:3000/users";
    // return fetch(url, {
    //   method: "POST",
    //   body: user
    // });
  }
}
