import axios from "axios";
let baseUrl = "http://localhost:8000/";
// let baseUrl = "https://shopping-website-12o1.onrender.com/";
let authentication_token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTk5NGRhZTMyM2MzOGM4NWFmZTI4OTYiLCJ1c2VybmFtZSI6ImFzaHV0b3NoQGdtYWlsLmNvbSIsImlhdCI6MTcwNDgyMjQ3MX0.JLbUsb763xbHIM5gfHihO353hcwUbdHP035fqfITg5g";
// let authentication_token = "";

export function GetData(apiRoute, payload, callback) {
  axios
    .get(baseUrl + apiRoute, {
      params: payload,
      headers: {
        "Content-Type": "application/json",
        token: authentication_token,
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
          token: authentication_token,
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
