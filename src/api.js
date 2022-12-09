const URL = "http://localhost:7777";

export default class API {
  static getNotes() {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", `${URL}/notes`);
      xhr.responseType = "json";

      xhr.addEventListener("load", () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr.response);
        } else {
          reject(xhr.response);
        }
      });
      xhr.send();
    });
  }

  static createNote(content) {
    console.log("2");
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", `${URL}/notes`);
      xhr.responseType = "json";
      const formData = new FormData();
      formData.append("content", content);
      xhr.addEventListener("load", () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr.response);
        } else {
          reject(xhr.response);
        }
      });
      const tmp = JSON.stringify({ content });
      xhr.send(tmp);
    });
  }
  static removeNote(id) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("DELETE", `${URL}/notes/${id}`);
      xhr.responseType = "json";

      xhr.addEventListener("load", () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr.response);
        } else {
          reject(xhr.response);
        }
      });
      xhr.send();
    });
  }
}
