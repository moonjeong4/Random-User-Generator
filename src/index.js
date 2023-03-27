import "./styles.css";

import getUsers from "./js/usersFetch";
import templateUser from "./hbs/user.hbs";

const appEl = document.getElementById("app");

const callback = (json) => {
  // console.log(json);
  appEl.innerHTML = templateUser(json);
  document.getElementById("rnd-user").addEventListener("click", function () {
    getUsers(callback);
  });
};
getUsers(callback);
