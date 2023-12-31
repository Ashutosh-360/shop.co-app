import axios from "axios";
// let baseUrl = "http://localhost:8000/";
let baseUrl = "https://shopping-website-12o1.onrender.com/";

export function GetData(apiRoute, payload, callback) {
  axios
    .get(baseUrl + apiRoute, {
      params: payload,
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      callback(response);
    })
    .catch((error) => {
      callback(error?.response);
    });
}
export function PostData(apiRoute, payload, callback) {
  try {
    axios
      .post(baseUrl + apiRoute, payload, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        callback(response);
      })
      .catch((error) => {
        callback(error?.response);
      });
  } catch (error) {
    callback(error);
  }
}
