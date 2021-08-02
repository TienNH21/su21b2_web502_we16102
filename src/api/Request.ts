import axios from 'axios';

axios.defaults.baseURL = "http://localhost:3000/";

export class Request {
  public static get(options: object) {
    return axios({
      method: "GET",
      ...options
    });
  }

  public static post(options: object) {
    return axios({
      method: "POST",
      ...options
    });
  }

  public static put(options: object) {
    return axios({
      method: "PUT",
      ...options
    });
  }

  public static delete(options: object) {
    return axios({
      method: "DELETE",
      ...options
    });
  }
}
