import axios from "axios";

const URL = "http://localhost:3001/streams";

const HEADERS = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

const list = (callBack) => {
  axios
    .get(URL, { HEADERS })
    .then((response) => callBack(response.data))
    .catch((reason) => {
      console.log(reason);
      callBack(false);
    });
};

const read = (id, callBack) => {
  axios
    .get(`${URL}/${id}`, { HEADERS })
    .then((response) => callBack(response.data))
    .catch((reason) => {
      console.log(reason);
      callBack(false);
    });
};

const insert = (data, callBack) => {
  console.log(data);
  axios
    .post(URL, data, { HEADERS })
    .then((response) => callBack(response.data))
    .catch((reason) => {
      console.log(reason);
      callBack(false);
    });
};

const update = (id, data, callBack) => {
  axios
    .put(`${URL}/${id}`, data, { HEADERS })
    .then((response) => callBack(response.data))
    .catch((reason) => {
      console.log(reason);
      callBack(false);
    });
};

const remove = (id, callBack) => {
  axios
    .delete(`${URL}/${id}`, { HEADERS })
    .then((response) => callBack(response.data))
    .catch((reason) => {
      console.log(reason);
      callBack(false);
    });
};

export { list, read, insert, update, remove };
